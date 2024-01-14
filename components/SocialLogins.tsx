"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { defaultLoginRedirect } from "@/routes";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

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
      <Button
        variant="default"
        className="space-x-4 text-lg md:text-xl"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-6 w-6" />
        <p className="pt-1">Sign In With Google</p>
      </Button>
      {/* <button className="w-full" onClick={() => onClick("github")}>
        <FaGithub className="h-5 w-5" />
      </button> */}
    </div>
  );
};

export default Social;
