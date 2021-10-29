import Image from "next/image";
import NavSearch from "./NavSearch";
import { navlinks } from "../../../utils/navlinks";

const MainNav = () => {
  return (
    <nav>
      <div>
        <Image
          src="/../public/content-coin.png"
          width={226}
          height={75}
          alt="Content Wars Logo"
          className=" text-center"
        />
      </div>
      <div>
        <NavSearch />
        <div>
          {navlinks.map((link) => {
            const { id, name, image } = link;
            return (
              <div key={id}>
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
