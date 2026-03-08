import ProductsCard from "./ProductsCard";
import { useNavigate } from "react-router-dom";
import { useProductFilter } from "../hooks/useProductFilter";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { motion, AnimatePresence } from "framer-motion";

const ProductGrid = () => {
  const navigate = useNavigate();
  const filteredProduct = useProductFilter();
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-600 hover:text-black"
      >
        ← Back
      </button>

      {filteredProduct.length === 0 ? (
        <h1 className="text-center text-xl font-semibold">No Products Found</h1>
      ) : (<AnimatePresence mode="popLayout">
        <motion.div layout transition={{type: "spring", stiffness:360, damping: 20}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {filteredProduct.map((p) => (
            <motion.div key={p.id} layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", duration: 0.4, stiffness: 300, damping: 22  }}
>
            <ProductsCard
              
              productDetails={p}
              onClick={() => setSelectedProduct(p)}
            /></motion.div>
          ))}
        </motion.div></AnimatePresence>
      )}
      
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            closeModal={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGrid;
