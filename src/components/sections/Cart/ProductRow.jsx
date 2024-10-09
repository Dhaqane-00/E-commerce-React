import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react"; // Import the icons
import { useSwipeable } from "react-swipeable"; // Import the swipeable hook
import { motion } from "framer-motion"; // Import framer-motion

const ProductRow = ({
  image,
  name,
  price,
  quantity,
  subtotal,
  onQuantityChange,
  onRemove, // Add a prop for removing the product
}) => {
  const [isSwiped, setIsSwiped] = useState(false);

  const handleIncrement = () => onQuantityChange(quantity + 1);
  const handleDecrement = () => onQuantityChange(quantity - 1);

  // Configure swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setIsSwiped(true);
      setTimeout(onRemove, 300); // Delay removal to allow animation to complete
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Allows swipe detection with a mouse
  });

  return (
    <motion.div
      {...swipeHandlers}
      className="overflow-hidden py-6 pr-16 pl-8 mt-10 w-full bg-white rounded shadow-sm max-md:px-5 max-md:max-w-full"
      initial={{ x: 0 }} // Initial position
      animate={{ x: isSwiped ? -1000 : 0 }} // Animate to the left when swiped
      exit={{ x: -1000 }} // Exit animation when removed
      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Animation settings
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 text-base text-black max-md:mt-10">
            {image ? (
              <img
                loading="lazy"
                src={image}
                alt={name}
                className="object-contain shrink-0 aspect-square w-[54px]"
              />
            ) : (
              <div className="flex shrink-0 w-16 h-[58px]" />
            )}
            <div className="my-auto">{name}</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap grow gap-5 justify-between items-center self-stretch my-auto text-base text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            <div className="self-stretch my-auto">${price.toFixed(2)}</div>
            <div className="flex shrink-0 self-stretch rounded border-2 border-solid border-black border-opacity-40 h-[47px] w-[75px]">
              <button onClick={handleDecrement} aria-label={`Decrease quantity for ${name}`}>
                <ArrowDown className="w-4 h-4" />
              </button>
              
              <button onClick={handleIncrement} aria-label={`Increase quantity for ${name}`}>
                <ArrowUp className="w-4 h-4" />
              </button>
              <div className="w-full h-full mt-2 text-center">{quantity}</div>
            </div>
            <div className="self-stretch my-auto">${subtotal.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductRow;
