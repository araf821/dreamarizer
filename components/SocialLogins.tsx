"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { defaultLoginRedirect } from "@/routes";
import { useSearchParams } from "next/navigation";

interface SocialProps {}

const Social = ({}: SocialProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || defaultLoginRedirect,
    });
  };

  return (
    <div className="flex w-full items-center gap-2">
      <button
        className="flex w-full items-center justify-between gap-4 rounded-md bg-[#ffeffb] px-4 py-3 text-lg"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-6 w-6" />
        <p className="pt-1">Sign In With Google</p>
      </button>
      {/* <button className="w-full" onClick={() => onClick("github")}>
        <FaGithub className="h-5 w-5" />
      </button> */}
    </div>
  );
};

export default Social;
