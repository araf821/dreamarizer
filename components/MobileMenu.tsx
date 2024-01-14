"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

interface MobileMenuProps {}

const MobileMenu = ({}: MobileMenuProps) => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60" align="end">
        <DropdownMenuItem className="text-lg">
          <Link href="/explore">Explore Dreams</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-lg">
          <Link href="/submit">Add A Dream</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-lg">
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        {user ? (
          <LogoutButton>
            <DropdownMenuItem className="cursor-pointer text-lg">
              Logout
            </DropdownMenuItem>
          </LogoutButton>
        ) : (
          <DropdownMenuItem className="text-lg">
            <Link href="/sign-in">Sign In</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
