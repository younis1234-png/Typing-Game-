import React from "react";

const Button = ({ handelStart, disabled }) => {
  return (
    <button onClick={handelStart}>{disabled ? "Start" : "Restart"}</button>
  );
};

export default Button;
