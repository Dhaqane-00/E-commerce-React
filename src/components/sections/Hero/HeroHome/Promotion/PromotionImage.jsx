import React from "react";

function PromotionImage({ imageSrc }) {
  return (
    <div
      className="flex shrink-0  max-w-full h-[328px] w-[539px] max-md:mt-4"
      role="img"
      aria-label={`iPhone 14 promotional image: ${imageSrc}`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default PromotionImage;
