import { Story } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <Link
      className="relative aspect-[16/10] w-full overflow-hidden rounded-xl"
      href={`/story/${story.id}`}
    >
      <Image
        src={story.imageUrl}
        alt=""
        fill
        className="object-cover opacity-80 transition duration-200 hover:opacity-100"
      />
    </Link>
  );
};

export default StoryCard;
