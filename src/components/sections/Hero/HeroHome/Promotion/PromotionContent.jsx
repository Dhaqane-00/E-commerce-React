import React from "react";
import PromotionHeader from "./PromotionHeader";
import ShopNowButton from "./ShopNowButton";

function PromotionContent() {
  return (
    <div className="flex flex-col items-start  self-stretch my-auto w-full text-base text-neutral-50 max-md:mt-10 max-md:mr-0">
      <PromotionHeader />
      <h1 className="self-stretch mt-5 text-5xl font-semibold tracking-widest leading-[60px] max-md:text-4xl max-md:leading-[56px]">
        Up to 10% off Voucher
      </h1>
      <ShopNowButton />
    </div>
  );
}

export default PromotionContent;
