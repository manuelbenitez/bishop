import React from "react";
import { HeaderFive } from "../typography/common";
import { wildBlueYonder } from "../typography/common/colors";
import styles from "./input.module.scss";
import { IInputProps } from "./input.types";
const Input = ({ value, onChange, label, placeholder }: IInputProps) => {
  return (
    <div className={styles["container"]}>
      <HeaderFive
        className={styles["container__label"]}
        color={wildBlueYonder}
        label={label}
      />
      <input
        className={styles["container__input"]}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          onChange(e.target.value)
        }
      />
    </div>
  );
};

export default Input;
