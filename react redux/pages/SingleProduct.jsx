import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);


  if (!product) return <p className="text-center py-20 text-xl">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
          <img src={product.thumbnail}
            alt={product.title}
            className="max-h-96 object-contain"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          <p className="text-sm text-gray-500 mb-4 capitalize">Category: {product.category}</p>
          <p className="text-3xl font-bold text-indigo-600 mb-8">${product.price}</p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;