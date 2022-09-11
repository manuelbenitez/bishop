import React from "react";
import styles from "./signup.module.scss";
import { ISignupProps } from "./signup.types";
const Signup = ({ isSignedUp }: ISignupProps) => {
  return <div className={styles["container"]}>Signup</div>;
};

export default Signup;
