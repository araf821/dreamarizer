import Social from "@/components/SocialLogins";

interface SignInPageProps {}

const SignInPage = ({}: SignInPageProps) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div className="rounded-xl border-2 border-black bg-pink-300 p-4">
        <Social />
      </div>
    </div>
  );
};

export default SignInPage;
