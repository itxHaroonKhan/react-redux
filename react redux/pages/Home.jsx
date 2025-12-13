import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import {  addToCart } from "../Redex/counterSlice";
import { Link } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
     axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <Link to={`/products/${item.id}`}>
              <div className="h-64 p-4 bg-gray-50 flex items-center justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition"
                />
              </div>
            </Link>
            <div className="p-4">
              <h3 className="font-semibold text-lg line-clamp-2 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.category}</p>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-indigo-600">${item.price}</p>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;