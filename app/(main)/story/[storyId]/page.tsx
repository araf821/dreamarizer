import { db } from "@/lib/db";
import Image from "next/image";
import Story from "../_components/Story";

interface pageProps {
  params: {
    storyId: string;
  };
}

const page = async ({ params }: pageProps) => {
  return (
    <div className="mx-auto max-w-screen-md px-4">
      <Story storyId={params.storyId} />
    </div>
  );
};

export default page;
