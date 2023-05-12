import React from "react";
import { useSelector } from "react-redux";
import { accountProfileDataSelector } from "../../../selectors";
import ProfileView from "../conponents/ProfileView";

const ProfileContainer = () => {
  const usersProfile = useSelector(accountProfileDataSelector);
  return <ProfileView usersProfile={usersProfile} />;
};

export default ProfileContainer;
