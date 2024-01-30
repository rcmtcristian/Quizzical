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
        src="https://i.imgur.com/IrC6HBW.png"
        alt="Question Count"
      />
     
      <input
        className="numberInput"
        type="number"
        max="50"
        min="3"
        value={questionCount}
        onChange={changeHandler}
        placeholder="How Many Questions Will You Answer?"
      />
    </div>
  );
}

export default HandleCount;
