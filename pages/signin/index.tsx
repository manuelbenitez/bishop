import React, { useState } from "react";
import Input from "../../ui/input";
import { ISigninProps } from "./signin.types";
import styles from "./signin.module.scss";
import { BodyFive } from "../../ui/typography/common";
import { wildBlueYonder } from "../../ui/typography/common/colors";
const Singin = ({ isSignedIn }: ISigninProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className={styles["container"]}>
      <BodyFive color={wildBlueYonder} label={"Sign in"} />
      <Input
        label={"Email"}
        value={email}
        onChange={setEmail}
        placeholder={"Enter your email"}
      />
      <Input
        label={"Password"}
        value={password}
        onChange={setPassword}
        placeholder={"Enter your password"}
      />
    </div>
  );
};

export default Singin;
