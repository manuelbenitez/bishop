import {
  aliceBlue,
  wildBlueYonder,
  manatee,
  davysGray,
  outerSpaceCrayola,
  white,
} from "./colors";
import { Typography } from "../base";
import { Abstractions } from "../typography.types";
import { IPresetTextProps } from "./common.types";

export const colorMap = new Map([
  ["aliceBlue", aliceBlue],
  ["wildBlueYonder", wildBlueYonder],
  ["manatee", manatee],
  ["davysGray", davysGray],
  ["outerSpaceCrayola", outerSpaceCrayola],
  ["white", white],
]);

export const HeaderOne = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={1.5}
    weight={600}
    {...props}
  />
);
export const HeaderTwo = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={1.125}
    weight={600}
    {...props}
  />
);
export const HeaderThree = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={1}
    weight={600}
    {...props}
  />
);
export const HeaderFour = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.875}
    weight={600}
    {...props}
  />
);
export const HeaderFive = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.75}
    weight={600}
    {...props}
  />
);

export const BodyOne = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.875}
    weight={400}
    {...props}
  />
);
export const BodyTwo = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.875}
    weight={500}
    {...props}
  />
);
export const BodyThree = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={1}
    weight={400}
    {...props}
  />
);
export const BodyFour = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={1.125}
    weight={400}
    {...props}
  />
);
export const BodyFive = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={1.5}
    weight={400}
    {...props}
  />
);

export const SubTextOne = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.75}
    weight={400}
    {...props}
  />
);
export const SubTextTwo = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.75}
    weight={500}
    {...props}
  />
);

export const Underline = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.625}
    weight={400}
    {...props}
  />
);

export const LargeButtonPureText = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.875}
    weight={600}
    hover
    {...props}
  />
);
export const LargeButtonActiveText = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.875}
    weight={700}
    {...props}
  />
);
export const LargeButtonInactiveText = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.875}
    weight={600}
    {...props}
  />
);
export const SmallButtonPureText = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.75}
    weight={600}
    hover
    {...props}
  />
);
export const SmallButtonActiveText = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.75}
    weight={700}
    {...props}
  />
);
export const SmallButtonInactiveText = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.75}
    weight={600}
    {...props}
  />
);

export const DropDownText = ({
  label,
  color,
  primary,
  ...props
}: IPresetTextProps) => (
  <Typography
    label={label}
    color={color}
    primary={primary}
    size={0.875}
    weight={400}
    {...props}
  />
);

export const componentMap = new Map<
  Abstractions,
  ({ label, color, primary }: IPresetTextProps) => JSX.Element
>([
  ["h1", HeaderOne],
  ["h2", HeaderTwo],
  ["h3", HeaderThree],
  ["h4", HeaderFour],
  ["h5", HeaderFive],
  ["b1", BodyOne],
  ["b2", BodyTwo],
  ["b3", BodyThree],
  ["b4", BodyFour],
  ["b5", BodyFive],
  ["st1", SubTextOne],
  ["st2", SubTextTwo],
  ["uline", Underline],
  ["lbpure", LargeButtonPureText],
  ["sbpure", SmallButtonPureText],
  ["lbactive", LargeButtonActiveText],
  ["sbactive", SmallButtonActiveText],
  ["lbinactive", LargeButtonInactiveText],
  ["sbinactive", SmallButtonInactiveText],
  ["drop", DropDownText],
]);
