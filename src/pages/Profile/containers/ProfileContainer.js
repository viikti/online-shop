import React from "react";
import { useSelector } from "react-redux";
import { userAccountAuthSelector } from "../../../selectors";
import ProfileView from "../conponents/ProfileView";

const ProfileContainer = () => {
  const usersProfile = useSelector(userAccountAuthSelector);
  return <ProfileView usersProfile={usersProfile} />;
};

export default ProfileContainer;
