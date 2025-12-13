import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">
              FakeStore
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop shop for the latest electronics, fashion, jewelry, and more.
              Shop with confidence – fast shipping, easy returns, and 24/7 support.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.25 4.25 0 00-7.28 3.88A12.08 12.08 0 013 4.79a4.25 4.25 0 001.32 5.68 4.21 4.21 0 01-1.93-.53v.05a4.25 4.25 0 003.41 4.17 4.22 4.22 0 01-1.92.07 4.25 4.25 0 003.97 2.95A8.52 8.52 0 012 19.54a12 12 0 006.52 1.91c7.82 0 12.1-6.48 12.1-12.1 0-.18-.01-.37-.02-.55A8.65 8.65 0 0024 4.56a8.44 8.44 0 01-2.54.7 4.28 4.28 0 001.88-2.36z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62 0-.62 0-.62 1 .07 1.53 1.03 1.53 1.03 .89 1.53 2.34 1.09 2.91.83 .09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.59 9.59 0 012.5-.34c.85.01 1.71.13 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02 .55 1.38.2 2.4.1 2.65 .64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95 .36.31.68 1.04.68 2.1 0 1.52-.01 2.75-.01 3.12 0 .27.18.58.69.48 3.98-1.33 6.83-5.09 6.83-9.49 0-5.5-4.46-9.96-9.96-9.96z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 3.5h-13v11h13v-11zm-9 8.5v-4h2v4h4l-5 5-5-5h4z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition">All Products</Link></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
              <li><Link to="/cart" className="hover:text-white transition">My Cart</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns & Exchange</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 FakeStore. All rights reserved. Made with ❤️ by Haroon Rasheed</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;