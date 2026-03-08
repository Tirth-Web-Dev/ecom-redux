import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParms] = useSearchParams();

  const category = searchParms.get("category");
  const sort = searchParms.get("sort");

  const handleSearch = (e) => {
    const value = e.target.value;

    let url = `/products?search=${value}`;

    if (category) {
      url += `&category=${category}`;
    }

    if (sort) {
      url += `&sort=${sort}`;
    }

    navigate(url);
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="relative w-full max-w-xl">

        {/* Icon */}
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        {/* Input */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
          transition"
        />

      </div>
    </div>
  );
};

export default SearchBar;