import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../../lib/utils";


export function Logo({ className }) {
  return (
    <Link to="/">
      <h1
      className={cn(
        "text-2xl font-bold tracking-wider leading-none whitespace-nowrap",
        className
      )}>
      Exclusive
    </h1>
    </Link>
  );
}
