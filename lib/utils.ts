import { auth } from "@/auth";
import { type ClassValue, clsx } from "clsx";
import { Yusei_Magic } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const yusei = Yusei_Magic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-merri",
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};
