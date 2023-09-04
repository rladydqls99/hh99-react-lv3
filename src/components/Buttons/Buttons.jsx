import React from "react";
import Button from "./Button";

function Buttons() {
  return (
    <div>
      <h1>Button</h1>
      <div>
        <Button title="Large Primary Button" btncolor="#55EFC4" />
        <Button title="Large Nagative Button" btncolor="#D63031" />
      </div>
    </div>
  );
}

export default Buttons;
