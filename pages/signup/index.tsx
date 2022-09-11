import React, { useState } from "react";
import Input from "../../ui/input";
import { BodyFive } from "../../ui/typography/common";
import { wildBlueYonder } from "../../ui/typography/common/colors";
import styles from "./signup.module.scss";
import { ISignupProps } from "./signup.types";
const Signup = ({ isSignedUp }: ISignupProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className={styles["container"]}>
      <BodyFive color={wildBlueYonder} label={"Signup"} />
      <Input
        label={"email"}
        value={email}
        onChange={setEmail}
        placeholder={"Enter your email"}
      />
      <Input
        label={"password"}
        value={password}
        onChange={setPassword}
        placeholder={"Enter your password"}
      />
    </div>
  );
};

export default Signup;
