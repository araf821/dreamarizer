import { db } from "@/lib/db";
import { currentUser } from "@/lib/utils";
import { redirect } from "next/navigation";
import StoryCard from "./StoryCard";

interface UserStoriesProps {}

const UserStories = async ({}: UserStoriesProps) => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const stories = await db.story.findMany({
    where: {
      userId: user.id,
    },
  });

  if (!stories.length) {
    return (
      <p className="mt-4 text-lg text-zinc-600 md:text-xl">
        You have not published any dreams yet.
      </p>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default UserStories;
