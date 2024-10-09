import React from "react";
import { Button } from "../../../ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { UserMenu } from "./UserMenu";
import { Badge } from "../../../ui/badge";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export function IconGroup() {
  const { state } = useCart();
  const totalItems = state.products.reduce((acc, product) => acc + product.quantity, 0);

  const icons = [
    { Icon: Heart, label: "Wishlist", count: 10, link: "/wishlist" },
    { Icon: ShoppingCart, label: "Shopping cart", count: totalItems, link: "/Cart" },
  ];

  return (
    <div className="flex gap-4 justify-center items-center self-stretch my-auto">
      {icons.map(({ Icon, label, count, link }, index) => (
        <Link to={link} key={index} className="relative group">
          <Button
            variant="ghost"
            size="icon"
            aria-label={label}
            className="relative group"
          >
            <Icon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
            <Badge className="absolute -top-2 -right-2 px-1 min-w-[1.25rem] h-5">
              {count}
            </Badge>
          </Button>
        </Link>
      ))}
      <UserMenu />
    </div>
  );
}
