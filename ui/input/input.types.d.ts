import { HTMLAttributes } from "react";

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Label above the input
   */
  label: string;
  /**
   * Value of the input
   */
  value: string;
  /**
   * Callback function for the onChange value of the input
   */
  onChange: (input: string) => void;
  /**
   * Inputs Placeholder
   */
  placeholder: string;
}
