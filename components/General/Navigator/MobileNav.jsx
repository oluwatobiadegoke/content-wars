import Image from "next/image";
import { navlinks } from "../../../utils/navlinks";

const MobileNav = () => {
  return (
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
  );
};

export default MobileNav;
