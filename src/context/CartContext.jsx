import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  products: [],
  couponCode: "",
};

function cartReducer(state, action) {
  switch (action.type) {
    case "UPDATE_QUANTITY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity, subtotal: product.price * action.payload.quantity }
            : product
        ),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id),
      };
    case "SET_COUPON_CODE":
      return { ...state, couponCode: action.payload };
    case "ADD_PRODUCT":
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                  subtotal: product.price * (product.quantity + 1),
                }
              : product
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
