import React from "react";

function CategoryItem({ imageSrc, altText, label, href }) {
  const baseClasses =
    "flex overflow-hidden flex-col items-center px-9 py-6 rounded border border-solid w-[170px] max-md:px-5";
  const hoverClasses = "hover:bg-red-500 hover:shadow-sm hover:text-neutral-50";
  const inactiveClasses = "border-black border-opacity-30 text-black";

  return (
    <a
      href={href}
      className={`${baseClasses} ${hoverClasses} ${inactiveClasses}`}
      aria-current={undefined}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className="object-contain w-14 aspect-square"
      />
      <div className="mt-4">{label}</div>
    </a>
  );
}

export default CategoryItem;
