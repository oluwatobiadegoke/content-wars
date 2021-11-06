import Image from "next/image";

import Countdown from "./Countdown";

const Schedule = ({ schedules }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 lg:mb-0 grid lg:grid-cols-2 gap-6">
      {schedules.map((schedule) => {
        return (
          <div
            key={schedule.id}
            className="w-full md:max-w-md bg-deepGrey-100 rounded-lg pt-8 pb-4 mx-auto lg:mx-0"
          >
            {schedule.live ? (
              <div className="mt-16 mb-12 flex justify-center">
                <button
                  className="h-6 w-14 rounded"
                  style={{ backgroundColor: "#F03333" }}
                >
                  LIVE
                </button>
              </div>
            ) : (
              <Countdown />
            )}
            <div className="my-8 relative h-12">
              <div className="absolute" style={{ right: "calc(50% - 12px)" }}>
                <Image
                  src={schedule.avatar}
                  alt={schedule.name}
                  width={48}
                  height={48}
                />
              </div>
              <div className="absolute" style={{ left: "calc(50% - 12px)" }}>
                <Image
                  src="/public/sch2.png"
                  alt="name"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className="text-white flex items-center justify-center gap-2">
              <p>{schedule.name}</p>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-black">
                <p>VS</p>
              </div>
              <p>{schedule.name}</p>
            </div>
            {schedule.timeElapsed && !schedule.live ? (
              <div className="flex justify-center mt-4">
                <button
                  className="h-10 w-36 text-black rounded hover:bg-opacity-50 transition-all"
                  style={{ backgroundColor: "#FDDA77" }}
                >
                  Go Live
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
