import Image from "next/image";
import NavSearch from "./NavSearch";
import { navlinks } from "../../../utils/navlinks";

const MainNav = () => {
  return (
    <nav className="bg-lightGrey-100 h-24 flex items-center px-6">
      <div className="flex-1">
        <Image
          src="/../public/content-coin.png"
          width={226}
          height={75}
          alt="Content Wars Logo"
          className=" text-center"
        />
      </div>
      <div className="flex justify-end flex-1 text-white">
        <NavSearch />
        <div className="flex gap-10">
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
