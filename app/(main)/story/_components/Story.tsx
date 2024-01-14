import { db } from "@/lib/db";
import { cn, yusei } from "@/lib/utils";
import Image from "next/image";

interface StoryProps {
  storyId: string;
}

const Story = async ({ storyId }: StoryProps) => {
  const story = await db.story.findUnique({
    where: {
      id: storyId,
    },
  });

  if (!story) {
    return <div></div>;
  }

  const user = await db.user.findUnique({
    where: {
      id: story.userId,
    },
  });

  return (
    <div className="my-8">
      <div className="relative mb-4 aspect-[16/10] w-full">
        <Image
          src={story?.imageUrl || ""}
          alt=""
          fill
          loading="eager"
          className="rounded-sm object-cover"
        />
      </div>

      <p className={cn("text-2xl sm:text-3xl md:text-4xl", yusei.className)}>
        {story?.title}
      </p>
      <p className="max-md:text-sm">Dreamed by {user?.name}</p>
      <hr className="mb-4 mt-1" />
      <p className="mx-auto max-w-screen-md whitespace-pre-line text-lg text-zinc-600 md:text-xl">
        {story?.story}
      </p>
      <hr className="my-4" />
      <div className="flex flex-col gap-2">
        <h3
          className={cn("text-2xl, text-center md:text-3xl", yusei.className)}
        >
          Dream Analysis
        </h3>
        <p className="text-center text-zinc-500 md:text-lg">
          Your Dreams Decoded. Your Mind Explored.
        </p>
        <p className="whitespace-pre-line text-lg text-zinc-600 md:text-xl">
          {story.analysis}
        </p>
      </div>
    </div>
  );
};

export default Story;
