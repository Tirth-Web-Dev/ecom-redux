import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Discover Amazing Products
          </h1>

          <p className="mt-4 text-gray-600">
            Shop the latest trends with the best quality products at affordable prices.
          </p>

          <button className="mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Shop Now <FaArrowRight />
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;