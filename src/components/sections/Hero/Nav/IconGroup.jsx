import React from "react";
import { Button } from "../../../ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { UserMenu } from "./UserMenu";
import { Badge } from "../../../ui/badge";

const icons = [
  { Icon: Heart, label: "Wishlist", count: 10 },
  { Icon: ShoppingCart, label: "Shopping cart", count: 20 },
];

export function IconGroup() {
  return (  
    <div className="flex gap-4 justify-center items-center self-stretch my-auto">
      {icons.map(({ Icon, label, count }, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          aria-label={label}
          className="relative group" // Add group class for hover effect
        >
          <Icon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" /> {/* Add transition and scale on hover */}
          <Badge className="absolute -top-2 -right-2 px-1 min-w-[1.25rem] h-5">
            {count}
          </Badge>
        </Button>
      ))}
      <UserMenu />
    </div>
  );
}
