import Image from "next/image";

const Vote = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-0 p-4 lg:p-0 lg:flex-row w-full justify-between bg-lightGrey-100 lg:h-20 rounded">
      <div className="flex gap-6 h-full items-center">
        <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center">
          <Image src="/public/war1.png" alt="" height={40} width={40} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-appYellow-100">900 Votes</p>
          <div className="h-1 w-28 rounded-full relative bg-black">
            <div className="bg-appYellow-100 rounded-full w-12 h-full"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 h-full items-center justify-end">
        <div className="flex flex-col gap-2">
          <p className="text-appYellow-100">400 Votes</p>
          <div className="h-1 w-28 rounded-full relative bg-black">
            <div className="bg-appYellow-100 rounded-full w-6 h-full"></div>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center">
          <Image src="/public/war1.png" alt="" height={40} width={40} />
        </div>
      </div>
    </div>
  );
};

export default Vote;
