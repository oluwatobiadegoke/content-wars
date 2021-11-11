import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavSearch from "./NavSearch";
import { navlinks } from "../../../utils/navlinks";

const MainNav = ({ openModal }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-deepGrey-100 h-20 lg:h-24 flex items-center px-3 lg:px-6">
      {/* LOGOS FOR DIFFERENT SCREENS */}
      <div className="flex-1 flex items-center h-full lg:hidden">
        <Link href="/">
          <a>
            <Image
              src="/content wars.png"
              width={100}
              height={90}
              alt="Content Wars Logo"
            />
          </a>
        </Link>
      </div>
      <div className="hidden lg:block lg:flex-1">
        <Link href="/">
          <a>
            <Image
              src="/content wars.png"
              width={120}
              height={120}
              alt="Content Wars Logo"
              className="border"
            />
          </a>
        </Link>
      </div>

      <div className={`flex justify-end flex-1 text-white`}>
        {/* YELLOW SEARCH TOGGLE BUTTON */}
        <div
          className={`${
            searchOpen ? "hidden" : "block"
          } cursor-pointer lg:hidden`}
        >
          <Image
            src="/search-yellow.svg"
            height={24}
            width={24}
            alt="search"
            onClick={() => setSearchOpen(true)}
          />
        </div>

        {/* SEARCH INPUTS FOR DIFF SCREENS */}
        <div className="hidden lg:flex items-center">
          <NavSearch />
        </div>
        <div
          className={`${searchOpen ? "flex items-center" : "hidden"} lg:hidden`}
        >
          <NavSearch />
        </div>
        <div className="gap-10 hidden lg:flex">
          {navlinks.map((link) => {
            const { id, name, image, type, route } = link;
            if (type === "link") {
              return (
                <Link href={route} key={id}>
                  <a className="flex flex-col items-center text-center gap-1 cursor-pointer">
                    <Image src={image} alt={name} height={20} width={20} />
                    <p>{name}</p>
                  </a>
                </Link>
              );
            }
            return (
              <div
                key={id}
                className="flex flex-col items-center gap-1 cursor-pointer"
                {...(name === "Upload" && { onClick: () => openModal() })}
              >
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
