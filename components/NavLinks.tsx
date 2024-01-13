import Link from "next/link";

interface NavLinksProps {}

const NavLinks = ({}: NavLinksProps) => {
  return (
    <ul className="flex items-center gap-8 max-md:hidden lg:gap-12">
      <li>
        <Link href="/explore" className="text-xl">
          Explore Dreams
        </Link>
      </li>
      <li>
        <Link href="/explore" className="text-xl">
          Add A Dream
        </Link>
      </li>
      <li>
        <Link href="/explore" className="text-xl">
          Dashboard
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
