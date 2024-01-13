"use client";

import { cn, yusei } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
import Link from "next/link";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "z-10 flex h-20 items-center justify-center py-4 shadow-[0_4px_8px] shadow-black/10",
        {
          "fixed inset-x-0 top-0 text-white shadow-none":
            pathname === "/" || pathname === "/sign-in",
        },
      )}
    >
      <div className="flex h-full w-full max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative aspect-square w-16">
            <Image src="/dream.svg" alt="logo" fill className="object-cover" />
          </div>
          <h2 className={cn("pb-1.5 text-4xl tracking-wider", yusei.className)}>
            Dreamarizer
          </h2>
        </Link>
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
