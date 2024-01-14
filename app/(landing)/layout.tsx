import Image from "next/image";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className="relative h-[100dvh] w-screen">
      <Image
        src="/herobg.webp"
        alt="hero background"
        fill
        className="object-cover"
      />
      {children}
    </div>
  );
};

export default layout;
