import React from "react";
import { useStoreState } from "../../../store";

const Profile = () => {
  const state = useStoreState((state) => state.user);
  return <div>Profile: {state.email}</div>;
};

export default Profile;
