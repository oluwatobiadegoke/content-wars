import Link from "next/link";
import Image from "next/image";
import { userlinks } from "../../utils/userlinks";

const ProfileLinks = () => {
  return (
    <div className="bg-deepGrey-100 flex flex-col rounded px-3 py-6">
      {userlinks.map((link) => {
        const { id, name, route, number } = link;
        return (
          <Link href={route} key={id}>
            <a className="flex items-center justify-between h-14 px-3 rounded bg-deepGrey-100 hover:bg-lightGrey-100 transition-all">
              <span className="flex items-center">
                <span>{name}</span>
                {(name === "Notifications" || name === "Video Requests") && (
                  <span className="h-5 w-5 rounded-full bg-appYellow-100 text-black flex items-center justify-center ml-1">
                    <span className="text-xs">{number}</span>
                  </span>
                )}
              </span>
              <Image
                src={"/../public/right.svg"}
                alt="right"
                width={20}
                height={20}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileLinks;
