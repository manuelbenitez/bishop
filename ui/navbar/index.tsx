import React from "react";
import { INavbarProps } from "./navbar.types";
import styles from "./navbar.module.scss";
import { BodyThree } from "../typography/common";
import { white } from "../typography/common/colors";
import Button from "../button";
import { useRouter } from "next/router";
const Navbar = ({ isLoggedIn }: INavbarProps) => {
  const router = useRouter();
  return (
    <div className={styles["container"]}>
      <BodyThree color={white} label={"Will be something"} />
      <BodyThree color={white} label={"Logo"} />
      <div className={styles["container__buttons"]}>
        <Button
          label={"Sign in"}
          type={"primary"}
          onClick={() => router.push("/signin")}
        />
        <Button
          label={"Sign up"}
          type={"secondary"}
          onClick={() => router.push("/signup")}
        />
      </div>
    </div>
  );
};

export default Navbar;
