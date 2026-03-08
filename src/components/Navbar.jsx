import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 tracking-wide"
        >
          ShopEase
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-black transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-black transition"
          >
            Products
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative"
          >
            <FaShoppingCart className="text-xl" />

            {totalItems > 0 && (
              <span
                className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
              >
                {totalItems}
              </span>
            )}

          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;