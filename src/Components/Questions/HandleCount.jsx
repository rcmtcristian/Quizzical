import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "./HandleCount.css";

function HandleCount() {
  const { questionCount, setQuestionCount } = useContext(AppContext);
  const changeHandler = (event) => setQuestionCount(event.target.value);
  return (
    <div className="number--container">
      <img
        className="questionMarkIcon"
        src="../src/assets/icon.svg"
        alt="question"
      />
      <input
        className="numberInput"
        type="number"
        max="50"
        min="3"
        value={questionCount}
        onChange={changeHandler}
        placeholder="Enter a number"
      />
    </div>
  );
}

export default HandleCount;
