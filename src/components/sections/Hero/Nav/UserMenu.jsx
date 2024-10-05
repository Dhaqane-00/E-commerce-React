import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { Button } from "../../../ui/button";
import { User } from "lucide-react";
import styles from "./UserMenu.module.css"; // Import the CSS module

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="User profile">
          <User className={`h-6 w-6 ${styles.iconAnimation}`} /> {/* Use module class */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-56 ${styles.dropdownContent}`}>
        <DropdownMenuLabel className="font-bold text-lg">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2 border-t border-gray-600" />
        <DropdownMenuItem className={styles.dropdownItem}>Profile</DropdownMenuItem>
        <DropdownMenuItem className={styles.dropdownItem}>Billing</DropdownMenuItem>
        <DropdownMenuItem className={styles.dropdownItem}>Team</DropdownMenuItem>
        <DropdownMenuItem className={styles.dropdownItem}>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
