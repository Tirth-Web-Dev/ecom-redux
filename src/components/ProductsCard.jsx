import { useState } from "react";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import toast from "react-hot-toast";

const ProductsCard = ({ productDetails, onClick }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  function handleAddCartclick() {
    dispatch(
      addToCart({
        ...productDetails,
        quantity: quantity,
      }),
    );
    toast.success(`${productDetails.title} added to cart 🛒`);
  }

  return (
    <motion.div
      layoutId={`product-${productDetails.id}`}
       transition={{
    layout: { duration: 0.15, ease: "easeInOut" }
  }}
      onClick={onClick}
      className="cursor-pointer group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative bg-gray-50 p-3">
        {/* Category Badge */}
        <span className="absolute top-4 left-4 text-gray-100 hover:text-black bg-black/30 backdrop-blur-sm  text-xs px-3 py-1 rounded-full capitalize z-10">
          {productDetails.category}
        </span>

        {/* Slider */}
        <div className="h-48">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            speed={500}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
          >
            {productDetails.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={productDetails.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <h3 className="font-semibold text-lg leading-tight">
          {productDetails.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2">
          {productDetails.description}
        </p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            ₹{productDetails.price}
          </p>

          <div className="flex items-center text-yellow-500 text-sm font-medium">
            ⭐ {productDetails.rating}
          </div>
        </div>

        {/* Stock */}
        <p className="text-xs text-green-600 font-medium">
          {productDetails.stock} in stock
        </p>

        {/* Quantity */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((prev) => Math.max(1, prev - 1));
              }}
              className="px-3 py-1 hover:bg-gray-100"
            >
              −
            </button>

            <span className="px-4 text-sm">{quantity}</span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuantity((prev) => prev + 1);
              }}
              className="px-3 py-1 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Add To Cart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddCartclick();
          }}
          className="mt-3 w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductsCard;
