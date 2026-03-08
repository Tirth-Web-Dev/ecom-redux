import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-black text-white py-16">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold">
          Subscribe to our Newsletter
        </h2>

        <p className="mt-4 text-gray-300">
          Get updates about new products and special offers.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-black w-full md:w-80"
          />

          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Subscribe
          </button>
        </div>

      </div>

    </section>
  );
};

export default Newsletter;