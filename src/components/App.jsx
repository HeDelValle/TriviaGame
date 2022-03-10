import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return <div>{props.question}</div>;
}

function Choice(props) {
  return <div class="choice"> {props.answer}</div>;
}

function Answer(props) {
  return (
    <div>
      {" "}
      The correct answer's index is:
      {props.answer}
    </div>
  );
  //conditional
}

function App() {
  let [answerDisplayed, setAnswerDisplayed] = useState(false);

  let currentQuestion = 0;
  console.log(data[0].question.text);

  return (
    <div className="App">
      <Question question={data[currentQuestion].question.text} />

      <Choice answer={data[currentQuestion].question.choices[0]} />
      <Choice answer={data[currentQuestion].question.choices[1]} />
      <Choice answer={data[currentQuestion].question.choices[2]} />
      <Choice answer={data[currentQuestion].question.choices[3]} />

      <Answer
        showAnswer={answerDisplayed}
        answer={data[currentQuestion].question.correct_choice_index}
      />
      <button onClick={() => (currentQuestion = 1)}>Next Question</button>

      <button onClick={() => setAnswerDisplayed(true)}>Answer Question</button>
    </div>
  );
}

export default App;
