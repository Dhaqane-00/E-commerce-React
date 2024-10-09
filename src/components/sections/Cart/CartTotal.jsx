import React from "react";

const CartTotal = ({ subtotal, shipping, total }) => {
  return (
    <div className="flex overflow-hidden flex-col px-6 py-8 text-black rounded border-2 border-black border-solid min-w-[240px] w-[470px] max-md:px-5 max-md:max-w-full">
      <h2 className="self-start text-xl font-medium leading-snug">
        Cart Total
      </h2>
      <div className="flex gap-10 items-start mt-6 whitespace-nowrap max-md:max-w-full">
        <div>Subtotal:</div>
        <div>${subtotal.toFixed(2)}</div>
      </div>
      <hr className="shrink-0 mt-4 h-px bg-black border border-black border-solid max-md:max-w-full" />
      <div className="flex gap-10 items-start mt-4 whitespace-nowrap max-md:max-w-full">
        <div>Shipping:</div>
        <div>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</div>
      </div>
      <hr className="shrink-0 mt-4 h-px bg-black border border-black border-solid max-md:max-w-full" />
      <div className="flex gap-10 items-start mt-4 whitespace-nowrap max-md:max-w-full">
        <div>Total:</div>
        <div>${total.toFixed(2)}</div>
      </div>
      <button className="self-center px-12 py-4 mt-4 font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;
