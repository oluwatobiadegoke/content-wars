import Image from "next/image";
import { navlinks } from "../../../utils/navlinks";

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 right-0 w-full h-20 flex lg:hidden items-center justify-between px-7 bg-lightGrey-100">
      {navlinks.map((link) => {
        const { id, name, image } = link;
        return (
          <div
            key={id}
            className="flex flex-col items-center text-white gap-1 cursor-pointer"
          >
            <Image src={image} alt={name} height={20} width={20} />
            <p className="capitalize">{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MobileNav;
