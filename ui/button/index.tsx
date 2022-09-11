import React from "react";
import styles from "./button.module.scss";
import { IButtonProps } from "./button.types";
const Button = ({ label, onClick, type }: IButtonProps) => {
  const classNames = [styles["button"], styles[`__${type}`]].join(" ");
  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
