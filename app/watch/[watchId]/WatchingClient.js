"use client";

import { useRouter } from "next/navigation";
import React from "react";
// import { useParams } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

const WatchingClient = ({ singleMovie }) => {
  const router = useRouter();
  //   const params = useParams();
  //   console.log(params);
  console.log(singleMovie);

  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="fixed w-full p-4 z-10 flex flex-row items-center bg-black gap-8 bg-opacity-70"
        onClick={() => router.push("/")}
      >
        <AiOutlineArrowLeft className="text-white" size={30} />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {singleMovie?.title}
        </p>
      </nav>
      <video
        src={singleMovie?.videoUrl}
        className="h-wull w-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default WatchingClient;
