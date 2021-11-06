import Image from "next/image";

const Menu = ({ menuOpen }) => {
  return (
    <div
      className={`absolute ${
        menuOpen ? "flex" : "hidden"
      } flex-col w-40 gap-4 right-4 top-14 py-4 pl-4 rounded border border-appYellow-100 bg-deepGrey-100`}
    >
      <div className="flex items-center gap-3">
        <Image src="/share.svg" height={24} width={24} alt="share" />
        <p>Share</p>
      </div>
      <div className="flex items-center gap-3">
        <Image src="/copy.svg" height={24} width={24} alt="share" />
        <p>Copy</p>
      </div>
    </div>
  );
};

export default Menu;
