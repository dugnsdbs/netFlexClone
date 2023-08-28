"use client";

import React, { useCallback, useState } from "react";
// import Avatar from "../Avatar";
// import useRegisterModel from "@/app/hooks/useRegisterModal";
// import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
// import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";
import { BsChevronDown } from "react-icons/bs";

const UserMenu = ({ currentuser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClickRegister = useCallback(() => {
    router.push("/register");
  }, [router]);

  const onClickLogin = useCallback(() => {
    router.push("/auth");
  }, [router]);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const logOut = useCallback(() => {
    signOut();
    router.refresh();
    router.push("/");
  }, [router]);

  return (
    <div className="relative" onClick={toggleOpen}>
      <div className="flex flex-row items-center gap-3">
        <div className="text-white text-sm"> Browse</div>
        <div>
          <BsChevronDown
            className={`text-white transition ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          <div className="hidden md:block">
            {/* <Avatar currentUser={currentUser} /> */}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-black w-56 absolute top-8 left-0 py5 flex-col border-2 border-gray-800 flex">
          <div className="flex flex-col gap-4">
            <div className="px-3 text-center text-white hover:underline">
              Home
            </div>
            <div className="px-3 text-center text-white hover:underline">
              Series
            </div>
            <div className="px-3 text-center text-white hover:underline">
              Films
            </div>
            <div className="px-3 text-center text-white hover:underline">
              New & Popular
            </div>
            <div className="px-3 text-center text-white hover:underline">
              My List
            </div>
            <div className="px-3 text-center text-white hover:underline">
              Browse by Languages
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
