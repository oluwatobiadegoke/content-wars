import { useState } from "react";
import Image from "next/image";
import NavSearch from "./NavSearch";
import { navlinks } from "../../../utils/navlinks";

const MainNav = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-lightGrey-100 h-20 lg:h-24 flex items-center px-3 lg:px-6">
      {/* LOGOS FOR DIFFERENT SCREENS */}
      <div className="flex-1 lg:hidden">
        <Image
          src="/../public/content-coin.png"
          width={129}
          height={38}
          alt="Content Wars Logo"
        />
      </div>
      <div className="hidden lg:block lg:flex-1">
        <Image
          src="/../public/content-coin.png"
          width={226}
          height={75}
          alt="Content Wars Logo"
        />
      </div>

      <div className={`flex justify-end flex-1 text-white`}>
        {/* YELLOW SEARCH TOGGLE BUTTON */}
        <div
          className={`${
            searchOpen ? "hidden" : "block"
          } cursor-pointer lg:hidden`}
        >
          <Image
            src="/../public/search-yellow.svg"
            height={24}
            width={24}
            alt="search"
            onClick={() => setSearchOpen(true)}
          />
        </div>

        {/* SEARCH INPUTS FOR DIFF SCREENS */}
        <div className="hidden lg:block">
          <NavSearch />
        </div>
        <div className={`${searchOpen ? "block" : "hidden"} lg:hidden`}>
          <NavSearch />
        </div>
        <div className="gap-10 hidden lg:flex">
          {navlinks.map((link) => {
            const { id, name, image } = link;
            return (
              <div key={id} className="flex flex-col items-center gap-1">
                <Image src={image} alt={name} height={20} width={20} />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
