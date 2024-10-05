import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion"; // Import Framer Motion

const menuItems = [
  {
    label: "Woman's Fashion",
    href: "#womens-fashion",
    subItems: ["Dresses", "Skirts", "Tops"],
  },
  {
    label: "Men's Fashion",
    href: "#mens-fashion",
    subItems: ["Shirts", "Pants", "Accessories"],
  },
  {
    label: "Electronics",
    href: "#electronics",
    subItems: ["Smartphones", "Laptops", "Accessories"],
  },
  {
    label: "Home & Lifestyle",
    href: "#home-lifestyle",
    subItems: ["Furniture", "Decor", "Kitchen"],
  },
  {
    label: "Medicine",
    href: "#medicine",
    subItems: ["Prescription", "OTC", "Supplements"],
  },
  {
    label: "Sports & Outdoor",
    href: "#sports-outdoor",
    subItems: ["Equipment", "Clothing", "Footwear"],
  },
  {
    label: "Baby's & Toys",
    href: "#babies-toys",
  },
  {
    label: "Groceries & Pets",
    href: "#groceries-pets",
  },
  {
    label: "Health & Beauty",
    href: "#health-beauty",
  },
];

function SidebarMenu() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.nav
      className="flex gap-10 max-w-[234px]"
      initial={{ opacity: 0 }} // Framer Motion initial state
      animate={{ opacity: 1 }} // Framer Motion animate state
      transition={{ duration: 0.5 }} // Framer Motion transition
    >
      <div className="abs flex gap-6 self-end mt-10">
        <ul className="flex flex-col items-start text-base text-center text-black ">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              label={item.label}
              href={item.href}
              subItems={item.subItems}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </ul>
      </div>
      <div
        className="shrink-0 w-px h-96 border border-solid"
        aria-hidden="true"
      />
    </motion.nav>
  );
}

export default SidebarMenu;
