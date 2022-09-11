import React from "react";
import { INavbarProps } from "./navbar.types";
import styles from "./navbar.module.scss";
import { BodyThree } from "../typography/common";
import { white } from "../typography/common/colors";
import Button from "../button";
const Navbar = ({ isLoggedIn }: INavbarProps) => (
  <div className={styles["container"]}>
    <BodyThree color={white} label={"Will be something"} />
    <BodyThree color={white} label={"Logo"} />
    <div className={styles["container__buttons"]}>
      <Button label={"Sign in"} type={"primary"} />
      <Button label={"Sing up"} type={"secondary"} />
    </div>
  </div>
);

export default Navbar;
