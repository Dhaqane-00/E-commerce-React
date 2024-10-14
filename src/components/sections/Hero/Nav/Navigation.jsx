import React from "react";
import { Button } from "../../../ui/button";
import { Link } from "react-router-dom";
import { cn } from "../../../../lib/utils";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Assuming you're using react-router

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Contact", href: "/contact"},
  { name: "About", href: "/about"},
  { name: "Sign Up", href: "/SignUp"},
];

export function Navigation({ className }) {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "flex gap-10 items-start text-base text-center min-w-[240px]",
        className
      )}
    >
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="flex flex-col items-center p-0"
          asChild
        >
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            animate={location.pathname === item.href ? { scale: 1.1, opacity: 1 } : {}}
            className="relative"
          >
            <Link to={item.href} className="flex flex-col items-center">
              <span>{item.name}</span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </Link>
          </motion.div>
        </Button>
      ))}
    </nav>
  );
}
