import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";

const Media = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 justify-around ">
      <div
        className="relative flex-1"
        style={{ paddingTop: "56.25%", height: "460px" }}
      >
        <ReactPlayer
          className="absolute top-0 left-0"
          url={"/dialec.mp4"}
          width="100%"
          height="100%"
          alt={"/dialec.mp4"}
          volume={0.5}
          playing={true}
          muted={true}
          loop={true}
          controls
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
              },
            },
          }}
        />
      </div>
      <div
        className="relative flex-1"
        style={{ paddingTop: "56.25%", height: "460px" }}
      >
        <ReactPlayer
          className="absolute top-0 left-0"
          url={"/model.mp4"}
          width="100%"
          height="100%"
          alt={"/dialec.mp4"}
          volume={0.5}
          playing={true}
          muted={true}
          loop={true}
          controls
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
              },
            },
          }}
        />
      </div>
      {/* <div
        className="h-full flex-1 flex justify-center"
        style={{ height: "460px" }}
      >
        <Image src="/war1.png" alt="" width={460} height={460} />
      </div>
      <div className="flex-1 flex justify-center" style={{ height: "460px" }}>
        <Image src="/war2.png" alt="" width={460} height={460} />
      </div> */}
    </div>
  );
};

export default Media;
