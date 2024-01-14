import Social from "@/components/SocialLogins";
import { cn, yusei } from "@/lib/utils";

interface SignInPageProps {}

const SignInPage = ({}: SignInPageProps) => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
      <p className="text-center md:text-lg">Welcome to</p>
      <h1
        className={cn(
          "hero-heading pb-12 text-5xl sm:text-6xl md:text-7xl",
          yusei.className,
        )}
      >
        Dreamarizer
      </h1>
      <div className="mx-auto">
        <Social />
      </div>
    </div>
  );
};

export default SignInPage;
