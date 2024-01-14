import { Button } from "@/components/ui/button";
import { cn, currentUser, yusei } from "@/lib/utils";
import Link from "next/link";

interface HeaderProps {}

const Header = async ({}: HeaderProps) => {
  const user = await currentUser();

  return (
    <div className="flex flex-col gap-2.5">
      <h2 className={cn("text-2xl md:text-3xl", yusei.className)}>
        Welcome back, {user?.name?.split(" ")[0]}
      </h2>
      <p className="text-lg text-zinc-600 md:text-xl">
        Ready to bring your dreams to reality?
      </p>
      <Link href="/submit" className="w-fit">
        <Button className="w-fit">Create a story</Button>
      </Link>
      <hr className="mt-2 border-4 border-[#FFCACC]" />
    </div>
  );
};

export default Header;
