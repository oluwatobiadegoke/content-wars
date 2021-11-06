import Image from "next/image";

const user = {
  id: 1,
  name: "Kristian Magret",
  bio: "Blogger, dog lover, Fashion enthusiast",
  category: "Beauty",
  posts: 156,
  followers: 5700,
  following: 89,
  avatar: "/user.png",
};

const Info = () => {
  return (
    <div className="flex flex-col items-center mt-6 mb-8">
      <div className="h-12 w-12 mb-3 overflow-hidden flex items-center justify-center">
        <Image src={user.avatar} width={48} height={48} alt={user.name} />
      </div>
      <div
        className="w-20 h-7 text-sm flex items-center justify-center rounded-md mb-3"
        style={{ backgroundColor: "#5D5FEF" }}
      >
        <p>{user.category}</p>
      </div>
      <p className="text-appYellow-100 mb-4">{user.bio}</p>
      <div className="flex justify-center w-full gap-12">
        <div className="flex flex-col items-center">
          <p className="font-bold">{user.posts}</p>
          <div>Posts</div>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">{user.followers}</p>
          <div>Followers</div>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">{user.following}</p>
          <div>Following</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
