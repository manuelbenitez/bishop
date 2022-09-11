import React from "react";
import styles from "./input.module.scss";
import { IInputProps } from "./input.types";
const Input = ({ value, onChange, label, placeholder }: IInputProps) => {
  return (
    <div className={styles["container"]}>
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
