import React from "react";
import { cn } from "../../../../lib/utils";

export function Logo({ className }) {
  return (
    <a href="/">
          <h1
      className={cn(
        "text-2xl font-bold tracking-wider leading-none whitespace-nowrap",
        className
      )}
    >
      Exclusive
    </h1>
    </a>
  );
}
