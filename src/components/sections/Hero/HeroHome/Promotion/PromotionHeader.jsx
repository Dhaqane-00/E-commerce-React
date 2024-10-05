import React from "react";

function PromotionHeader() {
  return (
    <header className="flex gap-6 items-center text-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f939f74e6b76c0860ee89617bb5a39fdb9644da4ba1e71a5076334ff037931a?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc"
        alt="iPhone icon"
        className="object-contain shrink-0 self-stretch my-auto w-10 aspect-[0.82]"
      />
      <h2 className="self-stretch my-auto w-[126px]">iPhone 14 Series</h2>
    </header>
  );
}

export default PromotionHeader;
