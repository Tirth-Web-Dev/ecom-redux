import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, increaseQauntity, decreaseQauntity } from '../features/cart/cartSlice';
import { useCartSummary } from '../hooks/useCartSummary';
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import ProductModal from '../components/ProductModal';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selectedProduct, setSelectedProduct] = useState(null);

   const {cartItem,productTotal,shipping,finalTotal} = useCartSummary()

   return (
  <section className="max-w-7xl mx-auto px-6 py-10">

<h1 className="text-3xl font-bold mb-8">
Your Cart ({cartItem.length})
</h1>
    {cartItem.length === 0 && (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">Your cart is empty</p>
        <button
          onClick={() => navigate("/products")}
          className="bg-black text-white px-6 py-2 rounded-lg"
        >
          Browse Products
        </button>
      </div>
    )}

    {cartItem.length > 0 && (
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">

          {cartItem.map((item) => (
            <motion.div
              layoutId={`product-${item.id}`}
              transition={{
    layout: { duration: 0.25 },
    type: "spring",
    stiffness: 320,
    damping: 28
  }}

              key={item.id}
              onClick={() => setSelectedProduct(item)}
              className="flex gap-4 border rounded-xl p-4 bg-white hover:shadow-md transition"
            >

              {/* Product Image */}
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />

              {/* Product Info */}
              <div className="flex-1">

                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="text-gray-500 text-sm capitalize">
                  {item.category}
                </p>

                <p className="font-semibold mt-1">₹{item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={(e) => {
                         e.stopPropagation()
                        dispatch(decreaseQauntity(item.id))}}
                    className="border px-3 py-1 rounded hover:bg-gray-100"
                  >
                    <FaMinus></FaMinus>
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(increaseQauntity(item.id))}}
                    className="border px-3 py-1 rounded hover:bg-gray-100"
                  >
                    <FaPlus></FaPlus>
                  </button>

                </div>

              </div>

              {/* Remove */}
              <button
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeFromCart(item.id))
                toast.success("Item removed from cart ❌");}}
                className="flex items-center justify-center gap-2 text-red-500 hover:text-red-700"
              >
               <FaTrash></FaTrash> Remove
              </button>

            </motion.div>
          ))}

        </div>

        {/* Order Summary */}
        <div className="border rounded-xl p-6 bg-gray-50 h-fit sticky top-20">

          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-gray-700">

            <div className="flex justify-between">
              <span>Products Total</span>
              <span>₹{productTotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>

          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Checkout
          </button>

        </div>

      </div>
    )} 
    {selectedProduct && (
  <ProductModal
    product={selectedProduct}
    closeModal={() => setSelectedProduct(null)}
  />
)}

  </section>
);
};

export default Cart;