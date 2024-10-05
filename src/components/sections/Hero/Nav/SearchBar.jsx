import React from "react";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form className="flex items-center space-x-2">
      <Input
        type="search"
        placeholder="What are you looking for?"
        className="w-[300px]"
      />
      <Button type="submit" size="icon">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
