import { cn, yusei } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-[-12px]">
      <h4 className="text-2xl text-white md:text-3xl">Analyzer. Summarizer.</h4>
      <h1
        className={cn(
          "hero-heading text-7xl font-light tracking-widest",
          yusei.className,
        )}
      >
        DREAMARIZER
      </h1>
    </div>
  );
}
