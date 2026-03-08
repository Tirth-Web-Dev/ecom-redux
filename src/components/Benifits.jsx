import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

        <div className="p-6 rounded-xl hover:shadow-lg transition">
          <FaShippingFast className="text-4xl mx-auto text-black mb-4" />
          <h3 className="text-xl font-semibold">Free Shipping</h3>
          <p className="text-gray-600 mt-2">
            Free shipping on all orders over $50.
          </p>
        </div>

        <div className="p-6 rounded-xl hover:shadow-lg transition">
          <MdSecurity className="text-4xl mx-auto text-black mb-4" />
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <p className="text-gray-600 mt-2">
            100% secure payment with trusted gateways.
          </p>
        </div>

        <div className="p-6 rounded-xl hover:shadow-lg transition">
          <FaHeadset className="text-4xl mx-auto text-black mb-4" />
          <h3 className="text-xl font-semibold">24/7 Support</h3>
          <p className="text-gray-600 mt-2">
            Our support team is always ready to help.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Benefits;