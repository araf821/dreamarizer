import { db } from "@/lib/db";
import Image from "next/image";

interface pageProps {
  params: {
    storyId: string;
  };
}

const page = async ({ params }: pageProps) => {
  const story = await db.story.findUnique({
    where: {
      id: params.storyId,
    },
  });

  return (
    <div>
      <div className="relative mx-auto mb-8 mt-12 aspect-[16/10] w-[768px]">
        <Image
          src={story?.imageUrl || ""}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <p>{story?.story}</p>
    </div>
  );
};

export default page;
