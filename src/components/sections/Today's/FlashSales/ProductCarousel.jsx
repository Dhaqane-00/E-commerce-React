import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

function ProductCarousel({ products }) {
  return (
    <motion.div
      className="flex overflow-x-auto gap-8 items-start mt-10 w-full max-md:max-w-full"
      style={{
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE and Edge
      }}
      css={{
        '&::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, and Opera
        },
      }}
      drag="x"
      dragConstraints={{ left: -1000, right: 0 }}
      whileTap={{ cursor: "grabbing" }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </motion.div>
  );
}

export default ProductCarousel;
