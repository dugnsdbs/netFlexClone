"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";
import UserMenu from "./UserMenu";
import NavbarItem from "./NavbarItem";
import { BsSearch, BsBell, BsChevronDown } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import Image from "next/image";

const TOP_OFFSET = 66;

const Navbar = ({ currentuser, movie }) => {
  const router = useRouter();
  const [showBackground, setShowBackground] = useState(false);

  // scroll 이 어느정도 내려가면, state 가 바뀜 그걸로 navbar background color 변경 하는거임
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // z-40 is for this component is above other component
  return (
    <nav className="w-full fixed z-40 top-0">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 
        ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}
      `}
      >
        <Image className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
        <div className=" flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by language" />
        </div>
        {/* lg:hidden 큰 스크린일때 숨긴다 */}
        <div className="lg:hidden  flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <UserMenu currentuser={currentuser} />
        </div>
        {/* ml-auto makes this div goes all away to right */}
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
          {/* relative will change location of div if chrome width gets smaller */}
          {currentuser ? (
            <div className="flex flex-row items-center gap-2 cursor-pointer relative">
              <AccountMenu currentuser={currentuser} />
            </div>
          ) : (
            <div className="flex flex-row gap-4">
              <p
                className="text-white text-sm hover:text-green-600 cursor-pointer"
                onClick={() => router.push("/register")}
              >
                Register
              </p>

              <p
                className="text-white text-sm hover:text-yellow-600 cursor-pointer"
                onClick={() => router.push("/auth")}
              >
                Login
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
