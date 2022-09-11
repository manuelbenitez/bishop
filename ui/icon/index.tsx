import React from "react";
import { IconContext } from "react-icons";
import { IIconProps } from "./icon.types";

export const Icon = ({ icon, context, ...props }: IIconProps) => {
  const providerProps = context
    ? { value: context }
    : { value: { style: { width: "1rem" } } };
  return (
    <IconContext.Provider {...providerProps}>
      <div className="flex items-center justify-center" {...props}>
        {icon}
      </div>
    </IconContext.Provider>
  );
};
