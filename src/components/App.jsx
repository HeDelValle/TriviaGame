import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return <div>{props.question}</div>;
}

function App() {
  let currentQuestion = 0;
  console.log(data[0].question.text);

  return (
    <div className="App">
      <Question question={data[currentQuestion].question.text} />
      <button>
        <Question question={data[currentQuestion].question.choices} />
      </button>
      <button onClick={() => (currentQuestion = 1)}>
        <nextquestion />
      </button>
      console.log(data[1].question.text);
    </div>
  );
}

export default App;

//write currentQuestion = currentQuestion +1and also console.log(data[1].question.text);
