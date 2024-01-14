import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "sonner";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dreamarizer",
  description: "An application.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={cn("flex min-h-[100dvh] flex-col", josefin.className)}>
          <Toaster richColors position="bottom-center" />
          <Navbar />
          <div className="flex-1">{children}</div>
        </body>
      </html>
    </SessionProvider>
  );
}
