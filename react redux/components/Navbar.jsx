// src/components/Navbar.jsx
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          FakeStore
        </Link>
        <Link to="/cart" className="relative text-lg font-semibold hover:text-indigo-600 transition">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-600 text-white px-2 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
