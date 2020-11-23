import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Words from "./components/Words";
import Container from "./components/Container";
import Typeracer from "./components/Typeracer";
import Results from "./components/Results";

function App() {
  // our state
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  // our variable for rendom words
  let randomWord = Math.floor(Math.random() * word.length);
  // console.log(word.length);

  // check Answer function
  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResults((prevCorrect) => [...prevCorrect, newWord]);
      setCountCorrect((prevCorrect) => prevCorrect + 1);
      return;
    }
    setWrongResults((prevWrong) => [...prevWrong, inputValue]);
  };

  // handle input
  const handelInput = (e) => {
    // we gonna send it to typracer
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(word[randomWord]);
      setInputValue("");
    }
  };

  // handlestRAT
  const handelStart = () => {
    // once we click the start set it to not disabled
    setDisabled(!disabled);
    // update our set correct and wrong to empty array
    setCountCorrect(0);
    setWrongResults([]);
    setCorrectResults([]);
    setInputValue("");
  };

  // useEffect

  useEffect(() => {
    if (time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (disabled) {
      setTime(30);
      setAnimation(null);
    } else if (time === 0) {
      setDisabled(true);
    }

    if (time <= 10) {
      setAnimation("scaleNumber 2s infinite");
    }
    // whenever disable and time change only run
  }, [disabled, time]);

  // when the page load
  useEffect(() => {
    // we want to get a new word when the page reload
    setNewWord(word[randomWord]);
  }, []);

  return (
    <div className="App">
      <Container>
        <Typeracer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          animation={animation}
          handelInput={handelInput}
          handelStart={handelStart}
        />
      </Container>
      <Results
        correctResults={correctResults}
        wrongResults={wrongResults}
        countCorrect={countCorrect}
      />
    </div>
  );
}

export default App;
