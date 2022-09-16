import { HTMLAttributes } from "react";

export type Abstractions =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "b5"
  | "st2"
  | "st1"
  | "uline"
  | "lbpure"
  | "sbpure"
  | "lbactive"
  | "sbactive"
  | "lbinactive"
  | "sbinactive"
  | "drop";
export type Colors =
  | "aliceBlue"
  | "wildBlueYonder"
  | "manatee"
  | "davysGray"
  | "outerSpaceCrayola"
  | "white"
  | "black";

export interface ITypographyProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  type?: Abstractions;
  color?: Colors;
  primary?: boolean;
}
