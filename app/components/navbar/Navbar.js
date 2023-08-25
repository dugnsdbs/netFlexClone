"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import Button from "../Button";
import { signOut } from "next-auth/react";

const Navbar = async ({ currentUser }) => {
  const router = useRouter();
  // const currentUser = await getCurrentUser();
  // if (currentUser) {
  //   console.log(currentUser);
  // }

  const onClickRegister = useCallback(() => {
    router.push("/register");
  }, [router]);

  const onClickLogin = useCallback(() => {
    router.push("/auth");
  }, [router]);

  const handleSignout = useCallback(() => {
    signOut();
    router.refresh();
    router.push("/");
  }, [signOut, router]);

  return (
    <div className="fixed top-0 right-0 p-4">
      <div className="flex flex-row items-end justify-between">
        {currentUser ? (
          <Button primary label="LOG OUT" onClick={handleSignout} />
        ) : (
          <>
            <Button onClick={onClickLogin} label="LOGIN" primary />
            <Button onClick={onClickRegister} label="REGISTER" />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
