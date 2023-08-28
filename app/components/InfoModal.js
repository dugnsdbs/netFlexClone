"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "../hooks/useInfoModal";
import { useParams } from "next/navigation";

// need to get sinlge movie info

const InfoModal = ({ movie, currentuser }) => {
  const { isOpen, onOpen, onClose, movieId } = useInfoModal();

  const [isVisible, setIsVislbe] = useState(isOpen);

  useEffect(() => {
    setIsVislbe(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsVislbe(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const foundMovie = movie.find((movie) => movie.id === movieId);

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 ">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              className="w-full birghtness-[60%] object-cover h-full"
              autoPlay
              muted
              loop
              src={foundMovie?.videoUrl}
              poster={foundMovie?.thumbnailUrl}
            ></video>
            <div
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
              onClick={handleClose}
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold md-8">
                {foundMovie?.title}
              </p>
              <div className="flex flex-row gap-4 items-center mt-4">
                <PlayButton movideId={foundMovie?.id} />
                <FavoriteButton
                  movieId={foundMovie?.id}
                  currentuser={currentuser}
                />
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <p className="text-green-400 font-semibold text-lg"> New</p>
            <p className="text-white text-lg">{foundMovie?.duration}</p>
            <p className="text-white text-lg">{foundMovie?.genre}</p>
            <p className="text-white text-lg">{foundMovie?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
