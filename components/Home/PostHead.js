import { useState } from "react";
import Image from "next/image";
import Menu from "./Menu";

const PostHead = ({ name, avatar, timestamp, category }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between px-4 pb-5">
      <Menu menuOpen={menuOpen} />
      <div className="flex gap-2 w-full">
        <div>
          <Image src={avatar} height={48} width={48} alt={name} />
        </div>
        <div className="flex-1 w-full">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="text-lg mb-1">{name}</p>
              <p className="text-sm mb-2">{timestamp}</p>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Image
                src="/../public/dots.svg"
                width={24}
                height={24}
                alt="menu"
              />
            </button>
          </div>
          <div
            className="h-7 w-20 text-sm flex items-center justify-center rounded"
            style={{
              backgroundColor: `${
                (category === "Beauty" && "#EF5DA8") ||
                (category === "Fashion" && "#5D5FEF") ||
                (category === "Music" && "#FFCA28")
              }`,
            }}
          >
            <p>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHead;
