import React from "react";
import LanguageSelector from "./LanguageSelector";

function Header() {
  return (
    <header className="flex justify-center items-center px-16 py-3 text-sm bg-black text-neutral-50 max-md:px-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="#"
            className="self-stretch my-auto font-semibold leading-6 text-center underline"
          >
            ShopNow
          </a>
        </div>
        <div className="ml-7">
        <LanguageSelector />
        </div>
        
      </div>
    </header>
  );
}

export default Header;
