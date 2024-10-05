import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchBar } from "./SearchBar";
import { IconGroup } from "./IconGroup";
import { Menu } from 'lucide-react';

export function Nav() {
  return (
    <header className="flex flex-wrap gap-10 justify-center items-center p-4 bg-white shadow-sm ">
      <div className="flex flex-wrap gap-10 items-start self-stretch my-auto text-black min-w-[240px] max-md:max-w-full ">
        <Logo />
        <div className="ml-[100px]">
          <Navigation className="hidden sm:flex" />
        </div>
      </div>
      <div className="flex gap-[100px] items-center self-stretch my-auto min-w-[240px] ">
        <SearchBar />
        <IconGroup />
      </div>
      <Navigation className="w-full mt-4 md:hidden" />
    </header>
  );
}
