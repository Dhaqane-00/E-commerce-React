import React from "react";

const FooterColumn = ({ title, items }) => {
  return (
    <div className="flex flex-col text-neutral-50">
      <h3 className="text-xl font-medium leading-snug">{title}</h3>
      <ul className="flex flex-col mt-6 text-base">
        {items.map((item, index) => (
          <li key={index} className={index > 0 ? "mt-4" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
