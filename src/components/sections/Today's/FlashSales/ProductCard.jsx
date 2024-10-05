import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProductCard({
  discount,
  image,
  name,
  currentPrice,
  originalPrice,
  rating,
  reviews,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="relative flex flex-col min-w-[240px] w-[270px]" // added relative here
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative flex overflow-hidden gap-1 items-center justify-center px-3 pt-3 pb-12 max-w-full rounded bg-neutral-100 w-[270px]">
        <div className="absolute top-3 right-3 flex flex-col">
          <button
            aria-label="Add to favorites"
            className="flex flex-col justify-center items-center px-1 w-[34px] h-[34px] bg-white rounded-full"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button
            aria-label="Quick view"
            className="flex flex-col justify-center items-center px-1 w-[34px] h-[34px] mt-2 bg-white rounded-full"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
          <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
            -{discount}%
          </div>
          <img
            loading="lazy"
            src={image}
            alt={name}
            className="object-contain self-center mt-3 max-w-full aspect-[1.13] w-[172px]"
          />
        </div>
      </div>
      <div className="flex flex-col self-start mt-4 text-base font-medium">
        <h3 className="text-black">{name}</h3>
        <div className="flex gap-3 items-start self-start mt-2 whitespace-nowrap">
          <span className="text-red-500">${currentPrice}</span>
          <span className="text-black opacity-50">${originalPrice}</span>
        </div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 z-10 px-7 py-2.5 text-base font-medium text-white bg-black rounded-none max-md:px-5"
          >
            Add To Cart
          </motion.button>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default ProductCard;
