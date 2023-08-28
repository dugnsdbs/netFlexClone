import React from "react";
import WatchingClient from "./WatchingClient";
import getSingleMovie from "@/app/actions/getSingleMovie";

const page = async (params) => {
  const singleMovie = await getSingleMovie(params);

  return (
    <div>
      <WatchingClient singleMovie={singleMovie} />
    </div>
  );
};

export default page;
