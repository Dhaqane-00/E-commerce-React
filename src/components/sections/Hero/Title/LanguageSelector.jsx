import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../ui/dropdown-menu";
import DropDown from "../../../../assets/icons/DropDown.svg";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["English", "Spanish", "French", "German", "Italian"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleToggle}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex gap-1.5 justify-center items-center whitespace-nowrap"
          aria-label="Select language"
        >
          <span className="self-stretch my-auto">{selectedLanguage}</span>
          <img
            loading="lazy"
            src={DropDown}
            className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            alt=""
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language}
            onSelect={() => {
              setSelectedLanguage(language);
              setIsOpen(false);
            }}
          >
            {language}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
