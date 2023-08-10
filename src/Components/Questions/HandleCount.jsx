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
        src="https://img.icons8.com/ios-filled/50/ff6981/decision.png"
        alt="Question Count"
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
