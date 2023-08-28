"use client";

import React, { useCallback, useMemo } from "react";
import axios from "axios";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/navigation";

const FavoriteButton = ({ movieId, currentuser }) => {
  const router = useRouter();
  const isFavorite = useMemo(() => {
    const list = currentuser?.favoriteIds || [];
    return list.includes(movieId);
  }, [currentuser, movieId]);

  const toggleFavorites = useCallback(
    async (e) => {
      e.stopPropagation();
      let response;

      if (isFavorite) {
        response = axios.delete(`/api/favorite/${movieId}`);
        router.refresh();
      } else {
        response = axios.post(`/api/favorite/${movieId}`);
        router.refresh();
      }

      const updatedFavoriteIds = response?.data?.favoriteIds;
      return updatedFavoriteIds;
    },
    [movieId, isFavorite]
  );

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;
