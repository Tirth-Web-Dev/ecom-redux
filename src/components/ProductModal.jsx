import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"
import toast from "react-hot-toast";


const ProductModal = ({ product, closeModal }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  function handleAddCartclick() {
    dispatch(
      addToCart({
        ...product,
        quantity
      })
    );
    toast.success(`${product.title} added to cart 🛒`)
    closeModal()
  }

  return (
    <motion.div onClick={closeModal}  className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-2 overflow-y-auto"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25 }}
>

      {/* Modal */}
      <motion.div onClick={(e) => e.stopPropagation()}   layoutId={`product-${product.id}`}  
      transition={{
         duration: 0.25,
    ease: [0.25, 0.1, 0.25, 1]
  }}
 className="bg-white rounded-2xl max-w-4xl w-full p-6 relative shadow-2xl">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 text-gray-100 hover:text-black z-10 bg-black/30 backdrop-blur-sm p-2 rounded-3xl"
        >
          <FaTimes size={18} />
        </button>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Image Slider */}
          <div className="w-full overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1}
                    speed={700}

           autoplay={{
    delay: 1500,
    disableOnInteraction: false
  }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false
          }}
          pagination={{ clickable: true }}
        
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={product.title}
                  className="w-full h-64 sm:h-80 md:h-88 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            ))}
          </Swiper></div>

          {/* Product Details */}
          <div className="flex flex-col gap-4">

            <h2 className="text-2xl font-bold">
              {product.title}
            </h2>

            <p className="text-gray-500 capitalize">
              Category: {product.category}
            </p>

            <p className="text-yellow-500 font-medium">
              ⭐ {product.rating}
            </p>

            <p className="text-gray-600">
              {product.description}
            </p>

            <h3 className="text-2xl font-bold">
              ₹{product.price}
            </h3>

            {/* Quantity */}
            <div className="flex items-center gap-4">

              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="border p-2 rounded"
              >
                <FaMinus />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="border p-2 rounded"
              >
                <FaPlus />
              </button>

            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddCartclick}
              className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Add To Cart
            </button>

          </div>

        </div>

      </motion.div>
    </motion.div>
  );
};

export default ProductModal;