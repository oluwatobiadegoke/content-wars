import Image from "next/image";
import Link from "next/link";
import { navlinks } from "../../../utils/navlinks";

const MobileNav = ({ openModal }) => {
  return (
    <div className="fixed bottom-0 right-0 z-50 w-full h-20 flex lg:hidden items-center justify-between px-7 bg-deepGrey-100">
      {navlinks.map((link) => {
        const { id, name, image, type, route } = link;
        if (type === "link") {
          return (
            <Link href={route} key={id}>
              <a
                key={id}
                className="flex flex-col items-center text-white gap-1 cursor-pointer"
              >
                <Image src={image} alt={name} height={20} width={20} />
                <p className="capitalize">{name}</p>
              </a>
            </Link>
          );
        }
        return (
          <div
            key={id}
            className="flex flex-col items-center text-white gap-1 cursor-pointer"
            {...(name === "Upload" && { onClick: () => openModal() })}
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
