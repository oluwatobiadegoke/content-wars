import Image from "next/image";

const Media = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 justify-around ">
      <div
        className="h-full flex-1 flex justify-center"
        style={{ height: "460px" }}
      >
        <Image src="/public/war1.png" alt="" width={460} height={460} />
      </div>
      <div className="flex-1 flex justify-center" style={{ height: "460px" }}>
        <Image src="/public/war2.png" alt="" width={460} height={460} />
      </div>
    </div>
  );
};

export default Media;
