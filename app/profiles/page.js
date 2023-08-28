import React from "react";
import ProfileLayout from "./ProfileLayout";
import getCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const currentuser = await getCurrentUser();
  return <ProfileLayout currentuser={currentuser} />;
};

export default page;
