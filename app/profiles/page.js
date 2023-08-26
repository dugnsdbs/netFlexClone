import React from "react";
import ProfileLayout from "./ProfileLayout";
import getCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();
  return <ProfileLayout currentUser={currentUser} />;
};

export default page;
