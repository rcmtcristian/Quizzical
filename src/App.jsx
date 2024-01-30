import { useState, useContext, useMemo } from "react";
import topShape from "./assets/BunnyHop.png";
import bottomShape from "./assets/BunnyHop.png";
import Question from "./Components/Questions/fetchQuestions";
import "./App.css";
import useSound from "use-sound";
import transitionSfx from "./assets/sounds/transition_up.wav";
import handleButton from "./Components/handleButton";
import HandleCount from "./Components/Questions/HandleCount";
import { AppContext } from "./Components/AppContext";

function App() {
  const [gameBegan, setGameBegan] = useState(false);
  // const numberQuestions = useContext(AppContext);

  const [play] = useSound(transitionSfx);
  function handleClick() {
    play();
    setGameBegan(true);
  }

  const [questionCount, setQuestionCount] = useState("5");
  const value = useMemo(
    () => ({ questionCount, setQuestionCount }),
    [questionCount]
  );

  return (
    <AppContext.Provider value={value}>
      <main>
        <div className="background"> </div>
        <section>
          <img className="topShape" src={topShape} alt="" />
          {gameBegan ? (
            <section className="question-container">
              <Question />
            </section>
          ) : (
            <section className="welcome-container">
              <h1>
                Welcome to QuizzHop by {""}
                <a href="https://github.com/rcmtcristian">rcmtcristian</a>
              </h1>
              <p className="QuizzHopInfo">
                <h3>What is QuizzHop</h3> It is a trivia game <hr></hr>
                QuizzHop is an adjective that describes a person or expression
                that shows curiosity or confusion. It can also mean strange or
                unusual. Pretty cool huh?
              </p>
              <button className="startGame--button" onClick={handleClick}>
                Start Game
              </button>
              <HandleCount />
            </section>
          )}
          <img className="bottomShape" src={bottomShape} alt="" />
        </section>
      </main>
    </AppContext.Provider>
  );
}

export default App;
