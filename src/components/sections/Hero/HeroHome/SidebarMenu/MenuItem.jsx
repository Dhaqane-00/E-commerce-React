import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap"; // Import GSAP

function MenuItem({ label, href, subItems, isOpen, onToggle }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onToggle(false); // Close the dropdown if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { opacity: 1, y: 0, duration: 0.3, display: 'block' });
    } else {
      gsap.to(menuRef.current, { opacity: 0, y: -20, duration: 0.3, display: 'none' });
    }
  }, [isOpen]);

  return (
    <li className="mt-4 first:mt-0 relative">
      {subItems && subItems.length > 0 ? (
        <div>
          <button
            className="flex items-center justify-between w-full hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => onToggle(!isOpen)}
          >
            <a href={href}>{label}</a>
            <ChevronRight
              className={`w-[18px] h-[18px] stroke-black stroke-[1.5px] ml-2 transition-transform duration-200 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </button>
          <div
            ref={menuRef}
            className="bg-white text-black absolute left-full top-0 ml-2 opacity-0 shadow-lg rounded-lg overflow-hidden"
            style={{ display: 'none' }} // Ensure the dropdown is hidden initially
          >
            {subItems.map((subItem, index) => (
              <div key={index} className="hover:bg-gray-100 transition-colors duration-200">
                <a
                  href={`${href}/${subItem.toLowerCase().replace(" ", "-")}`}
                  className="block w-full py-2 px-4"
                >
                  {subItem}
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <a
          href={href}
          className="flex items-center justify-between w-full hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {label}
        </a>
      )}
    </li>
  );
}

export default MenuItem;
