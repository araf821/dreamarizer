"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import Link from "next/link";
import UserButton from "./UserButton";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

interface NavLinksProps {}

const NavLinks = ({}: NavLinksProps) => {
  const searchParams = useSearchParams();
  const user = useCurrentUser();

  useEffect(() => {
    if (searchParams.get("callbackUrl")) {
      toast("Please sign in first.");
    }
    // console.log(searchParams.get("callbackUrl"));
  }, [searchParams]);

  return (
    <ul className="flex items-center gap-8 pt-2 text-lg max-md:hidden lg:gap-12 lg:text-xl xl:gap-16">
      <li>
        <Link href="/explore">Explore Dreams</Link>
      </li>
      <li>
        <Link href="/submit">Add A Dream</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      {user ? (
        <li>
          <UserButton />
        </li>
      ) : (
        <li>
          <Link
            href="/sign-in"
            className="rounded-lg bg-pink-300 px-2 py-1.5 pt-2 font-medium text-black"
          >
            Sign In
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
