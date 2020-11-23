import React from "react";
import Button from "./Button";

const Typeracer = (props) => {
  // to have access to all of them we  the (states) do the following
  const {
    newWord,
    inputValue,
    setInputValue,
    disabled,
    time,
    animation,
    handelInput,
    handelStart,
  } = props;

  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>
      <div
        style={{ animation: animation !== null ? animation : "" }}
        className="time"
      >
        <p>{time}</p>
      </div>
      <div className="wordValues">
        <input
          value={inputValue}
          // disabled is for our input when it set to true we can writ but wen it set to false we can
          disabled={disabled && disabled}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder={disabled ? "" : "Start typing...."}
          // handling input
          onKeyPress={(e) => handelInput(e)}
        />
        <Button disabled={disabled} handelStart={handelStart} />
      </div>
    </div>
  );
};

export default Typeracer;
