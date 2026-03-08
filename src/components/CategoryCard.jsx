import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/products?category=${category.name.toLowerCase()}`);
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white border rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
    >
      <h3 className="text-lg font-semibold mb-2">
        {category.name}
      </h3>

      <div className="flex items-center text-sm text-gray-500 gap-1">
        Explore <FaArrowRight />
      </div>
    </div>
  );
};

export default CategoryCard;