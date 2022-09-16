import { ITypographyProps } from "./typography.types";
import { componentMap, colorMap, BodyOne } from "./common/common";
export const Typography = ({
  label,
  type = "b1",
  color = "black",
  primary,
  ...props
}: ITypographyProps) => {
  const TextStyle = componentMap.get(type);
  let FinalRender = BodyOne({
    label: "Invalid Typography",
    color: "red",
    primary: false,
  });
  if (TextStyle) {
    const textColor = colorMap.get(color) || "gray";
    FinalRender = TextStyle({
      label: label,
      color: textColor,
      primary: primary,
    });
  }
  return <div {...props}>{FinalRender}</div>;
};
