import React from "react";
import ProductGrid from "../components/ProductGrid";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { categoriesData } from "../data/categories";
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const navigate = useNavigate();
  const [searchParms] = useSearchParams();

  function handleSort(value) {
          const parms = new URLSearchParams(searchParms);
          parms.set("sort",value);
          navigate(`/products?${parms.toString()}`);
  }
   function handleCategory(value){
          const params = new URLSearchParams(searchParms);
          if(value === ""){
            params.delete("category")
          }else{
            params.set("category",value)
          }

          navigate(`/products?${params.toString()}`)
   } 

  return (
   <section className="max-w-7xl mx-auto px-6 py-10">

  {/* Header */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
    
    <h1 className="text-3xl font-bold">
      All Products
    </h1>

    <button
      onClick={() => navigate("/cart")}
      className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      <FaShoppingCart />
      Go to Cart
    </button>

  </div>


  {/* Filters Bar */}
  <div className="flex flex-col md:flex-row gap-4 mb-10">

    {/* Search */}
    <div className="flex-1">
      <SearchBar />
    </div>

    {/* Category Filter */}
    <select
      onChange={(e) => handleCategory(e.target.value)}
      className="border rounded-lg px-4 py-2 bg-white hover:border-black transition"
    >
      <option value="">All Categories</option>

      {categoriesData.map((item) => (
        <option key={item.id} value={item.name.toLowerCase()}>
          {item.name}
        </option>
      ))}
    </select>

    {/* Sort Dropdown */}
    <select
      onChange={(e) => handleSort(e.target.value)}
      className="border rounded-lg px-4 py-2 bg-white hover:border-black transition"
    >
      <option value="">Sort By</option>
      <option value="low-high">Price: Low → High</option>
      <option value="high-low">Price: High → Low</option>
    </select>

  </div>


  {/* Products */}
  <ProductGrid />

</section>
  );
};

export default Products;
