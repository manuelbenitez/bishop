import React from "react";
import Button from "../../ui/button";
import styles from "./dev.module.scss";
const Dev = () => {
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
    </div>
  );
};

export default Dev;
