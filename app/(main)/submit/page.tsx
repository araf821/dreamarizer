import { cn, yusei } from "@/lib/utils";
import React from "react";
import DreamSubmitForm from "./_components/DreamSubmitForm";

const SubmitPage = () => {
  return (
    <div className="mx-auto my-16 max-w-screen-md px-4">
      {/* Header */}
      <div className="space-y-2">
        <h2 className={cn("text-2xl sm:text-3xl md:text-4xl", yusei.className)}>
          Bring a dream to life
        </h2>
        <p className="max-w-[600px] text-zinc-600 max-md:text-sm">
          Tell us about your dream and we will make a story out of it including
          an image to go along with it. Your dreams won&apos;t be public for
          other to see, but the story will be.
        </p>
        <hr className="border-4 border-[#FFCACC]" />
      </div>
      <DreamSubmitForm />
    </div>
  );
};

export default SubmitPage;
