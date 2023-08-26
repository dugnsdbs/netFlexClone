"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useRouting = () => {
  const router = useRouter();
  const homeRoute = useCallback(() => {
    router.push("/");
  }, [router]);

  return { homeRoute };
};

export default useRouting;
