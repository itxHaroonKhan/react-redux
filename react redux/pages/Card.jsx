// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeFromCart, clearCart } from "../Redex/counterSlice";
import { Link } from "react-router";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-bold mb-6">Your Cart is Empty</h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center">Your Cart</h2>
      <div className="bg-white rounded-2xl shadow-xl divide-y">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-6 p-6">
            <img
              src={item.thumbnail || item.image}
              alt={item.title}
              className="w-24 h-24 object-contain rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gray-50 rounded-2xl p-8 text-right">
        <p className="text-3xl font-bold text-indigo-600">Total: ${total}</p>
        <div className="mt-6 space-x-4">
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            Clear Cart
          </button>
          <button className="bg-indigo-600 text-white px-10 py-3 rounded-lg hover:bg-indigo-700 transition font-bold text-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
