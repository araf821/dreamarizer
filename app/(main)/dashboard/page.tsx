import Header from "./_components/Header";
import UserStories from "./_components/UserStories";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="mx-auto my-12 max-w-screen-lg px-4">
      <Header />
      <UserStories />
    </div>
  );
};

export default page;
