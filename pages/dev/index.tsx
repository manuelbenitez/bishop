import React, { useState } from "react";
import Button from "../../ui/button";
import Input from "../../ui/input";
import {
  BodyFive,
  BodyFour,
  BodyOne,
  BodyThree,
  BodyTwo,
  HeaderFive,
  HeaderFour,
  HeaderOne,
  HeaderThree,
  HeaderTwo,
} from "../../ui/typography/common";
import { aliceBlue, wildBlueYonder } from "../../ui/typography/common/colors";
import styles from "./dev.module.scss";
const Dev = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Button
          label={"Primary"}
          onClick={() => console.log("clicked")}
          type={"primary"}
        />
        <Button
          label={"Secondary"}
          onClick={() => console.log("clicked")}
          type={"secondary"}
        />
        <Button label={"Disabled"} type={"disabled"} />
      </div>
      <div>
        <Input
          label={"Sign In"}
          value={value}
          onChange={setValue}
          placeholder={"Enter your value here"}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <HeaderOne color={wildBlueYonder} label={"Header One"} />
        <HeaderTwo color={wildBlueYonder} label={"Header Two"} />
        <HeaderThree color={wildBlueYonder} label={"Header Three"} />
        <HeaderFour color={wildBlueYonder} label={"Header Four"} />
        <HeaderFive color={wildBlueYonder} label={"Header Five"} />
        <BodyOne color={wildBlueYonder} label={"Body One"} />
        <BodyTwo color={wildBlueYonder} label={"Body Two"} />
        <BodyThree color={wildBlueYonder} label={"Body Three"} />
        <BodyFour color={wildBlueYonder} label={"Body Four"} />
        <BodyFive color={wildBlueYonder} label={"BodyFive"} />
      </div>
    </div>
  );
};

export default Dev;
