import React, { HTMLAttributes, ReactComponentElement } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Button label
   */
  label: string;
  /**
   * Callback function to be executed on button click
   */
  onClick?: () => void;
  /**
   * Button type
   */
  type: ButtonType;
}

type ButtonType = "primary" | "secondary" | "disabled";
