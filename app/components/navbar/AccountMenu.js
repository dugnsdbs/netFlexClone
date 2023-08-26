"use client";

import React, { useState, useCallback } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BsSearch, BsBell, BsChevronDown } from "react-icons/bs";

const AccountMenu = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  console.log(currentUser.name);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const logOut = useCallback(() => {
    signOut();
    router.refresh();
    router.push("/");
  }, [router]);

  return (
    <div onClick={toggleOpen}>
      <div className="flex flex-row items-center justify-between">
        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden mr-2">
          <img src="images/default-blue.png" alt="blue" />
        </div>
        <BsChevronDown
          className={`text-white transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isOpen ? (
        <div className="gb-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
          <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex flex-row gap-3 items-ceter w-full">
              <img
                className="w-8 rounded-md"
                src="/images/default-blue.png"
                alt="blue"
              />
              <p className="text-white text-sm group-hover/item:underline">
                {currentUser.name}
              </p>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div
              onClick={signOut}
              className="px-3 text-center text-white text-sm hover:underline"
            >
              Sign out
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AccountMenu;
