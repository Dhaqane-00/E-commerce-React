import React from "react";
import LanguageSelector from "./LanguageSelector";

function Header() {
  return (
    <header className=" flex overflow-hidden flex-col justify-center items-center px-16 py-3 text-sm bg-black text-neutral-50 max-md:px-5">
      <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
        <div className="flex flex-wrap gap-2 items-center min-w-[240px] max-md:max-w-full">
          <p className="self-stretch my-auto w-[474px] max-md:max-w-full">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="#"
            className="self-stretch my-auto font-semibold leading-6 text-center underline"
          >
            ShopNow
          </a>
        </div>
        <div className=" ">
        <LanguageSelector />
        </div>
        
      </div>
    </header>
  );
}

export default Header;
