import React, { useState } from "react";
import Button from "../../ui/button";
import Input from "../../ui/input";
import styles from "./dev.module.scss";
const Dev = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
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
      <div>
        <Input
          label={"Sign In"}
          value={value}
          onChange={setValue}
          placeholder={"Enter your value here"}
        />
      </div>
    </div>
  );
};

export default Dev;
