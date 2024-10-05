import React from "react";
import { ArrowRight } from "lucide-react";

function ShopNowButton() {
  return (
    <div className="flex gap-2 items-center mt-6 font-medium text-center">
      <button className="flex flex-col self-stretch my-auto w-[81px]">
        <span className="self-start">Shop Now</span>
        <div className="mt-1 border border-solid bg-neutral-50 border-neutral-50 min-h-[1px] w-[81px]" />
      </button>
      <ArrowRight className="w-6 h-6" />
    </div>
  );
}

export default ShopNowButton;
