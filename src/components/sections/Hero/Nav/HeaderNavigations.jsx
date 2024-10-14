import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";
import { IconGroup } from "./IconGroup";
import { MenuIcon } from "lucide-react";

export function Nav() {
  return (
    <header className=" flex justify-between items-center py-4 px-10 shadow-sm ">
      <div className=" flex items-center gap-10">
        <Logo />
        <div className="max-lg:hidden ">
          <Navigation className="" />
        </div>
      </div>
      <div className=" flex items-center gap-5 max-sm:hidden">
        <SearchBar />
        <IconGroup />
      </div>
      <div className="max-lg:block hidden">
        <MenuIcon />
      </div>
    </header>
  );
}
