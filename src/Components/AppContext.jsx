import React, { useState, useEffect, useContext } from "react";

// const handleChange = () => {
//   const value = document.querySelector(".numberInput").value;
//   return value;
// };

export const AppContext = React.createContext({
  questionCount: 5,
  setQuestionCount: () => {},
});
