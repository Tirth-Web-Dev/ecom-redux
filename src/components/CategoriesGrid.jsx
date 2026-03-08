import React from "react";
import CategoryCard from "./CategoryCard";
import { categoriesData } from "../data/categories";

const CategoriesGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categoriesData.map((c) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </div>

    </section>
  );
};

export default CategoriesGrid;