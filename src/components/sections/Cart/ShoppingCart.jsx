import React from "react";
import ProductRow from "./ProductRow";
import CartTotal from "./CartTotal";
import { useCart } from "@/context/CartContext";

const ShoppingCart = () => {
  const { state, dispatch } = useCart();
  const { products, couponCode } = state;

  const subtotal = products.reduce((acc, product) => acc + product.subtotal, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    console.log("Coupon submitted:", couponCode);
  };

  return (
    <main className="flex flex-col">
      <section className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <header className="flex overflow-hidden flex-col justify-center px-10 py-6 w-full text-base text-black whitespace-nowrap bg-white rounded shadow-sm max-md:px-5 max-md:max-w-full">
            <div className="flex justify-between gap-10 items-center max-md:max-w-full">
              <div className="flex-1 text-center">Product</div>
              <div className="flex-1 text-center">Price</div>
              <div className="flex-1 text-center">Quantity</div>
              <div className="flex-1 text-center">Subtotal</div>
            </div>
          </header>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              {...product}
              onQuantityChange={(newQuantity) =>
                dispatch({ type: "UPDATE_QUANTITY", payload: { id: product.id, quantity: newQuantity } })
              }
              onRemove={() => dispatch({ type: "REMOVE_PRODUCT", payload: { id: product.id } })}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-6 text-base font-medium text-black max-md:max-w-full">
          <button className="gap-2.5 self-stretch px-12 py-4 rounded border border-solid border-black border-opacity-50 max-md:px-5">
            Return To Shop
          </button>
        </div>
      </section>
      <section className="flex flex-wrap justify-between items-start mt-20 text-base max-md:mt-10 max-md:max-w-full">
        <form
          onSubmit={handleCouponSubmit}
          className="flex flex-wrap gap-4 items-end min-w-[240px] max-md:max-w-full"
        >
          <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 text-black rounded border border-black border-solid min-w-[240px] w-[300px] max-md:px-5">
            <label htmlFor="couponCode" className="sr-only">
              Coupon Code
            </label>
            <input
              type="text"
              id="couponCode"
              value={couponCode}
              onChange={(e) => dispatch({ type: "SET_COUPON_CODE", payload: e.target.value })}
              placeholder="Coupon Code"
              className="w-full opacity-50"
              aria-label="Enter coupon code"
            />
          </div>
          <button
            type="submit"
            className="gap-2.5 self-stretch px-12 py-4 font-medium bg-red-500 rounded text-neutral-50 max-md:px-5"
          >
            Apply Coupon
          </button>
        </form>
        <div className="mb-10">
          <CartTotal  subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      </section>
    </main>
  );
};

export default ShoppingCart;