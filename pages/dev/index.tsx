import React, { useCallback, useEffect, useState } from "react";
import Button from "../../ui/button";
import { Icon } from "../../ui/icon";
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
import { wildBlueYonder } from "../../ui/typography/common/colors";
import styles from "./dev.module.scss";
import { FaBeer } from "react-icons/fa";
import Navbar from "../../ui/navbar";
import Places from "../../ui/google-maps/maps-container";
import { CalendarWidget } from "../../ui/calendar-widget";
import { labels } from "./labels";
const Dev = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={styles["row"]}>
      <Navbar />
      <div className={styles["column"]}>
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
          label={"Sign in"}
          value={value}
          onChange={setValue}
          placeholder={"Enter your value here"}
        />
      </div>
      <div className={styles["column"]}>
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
      <Icon icon={<FaBeer style={{ color: wildBlueYonder }} />} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          width: "300px",
          height: "700px",
        }}
      >
        <Places />
      </div>
      <div style={{ width: "350px", height: "700px" }}>
        <CalendarWidget labels={labels} />
      </div>
    </div>
  );
};

export default Dev;
