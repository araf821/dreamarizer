import { cn, yusei } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-[-12px]">
      <h4 className="text-2xl text-white md:text-3xl">Analyzer. Summarizer.</h4>
      <h1
        className={cn(
          "hero-heading text-5xl font-light tracking-widest sm:text-6xl md:text-7xl",
          yusei.className,
        )}
      >
        DREAMARIZER
      </h1>
    </div>
  );
}
