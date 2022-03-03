import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return <div>{props.question}</div>;
}

function Answer(props) {
  return (
    <div>
      {" "}
      <button>{props.answer} </button>
    </div>
  );
}

function CorrectAnswer(props) {
  return <div>{props.answer}</div>;
}

function App() {
  let currentQuestion = 0;
  console.log(data[0].question.text);

  return (
    <div className="App">
      <Question question={data[currentQuestion].question.text} />

      <Answer answer={data[currentQuestion].question.choices[0]} />
      <Answer answer={data[currentQuestion].question.choices[1]} />
      <Answer answer={data[currentQuestion].question.choices[2]} />
      <Answer answer={data[currentQuestion].question.choices[3]} />

      <CorrectAnswer
        correctAnswer={data[currentQuestion].question.correct_choice_index}
      />
      <button onClick={() => (currentQuestion = 1)}>Next Question</button>
    </div>
  );
}

export default App;
