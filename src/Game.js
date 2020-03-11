import React, { Component } from "react";

class Game Extends Component {
  constructor(props) {
    super(props);
    this.initializeValues = this.makeNewQuestion();
    this.state = {
      valueX: initializeValues[0],
      valueY: initializeValues[1],
      valueZ: initializeValues[2],
      proposedAnswer: initializeValues[3]
    };
  }
  getNewValues() {
    const valueX = Math.floor(Math.random() * 100);
    const valueY = Math.floor(Math.random() * 100);
    const valueZ = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [valueX, valueY, valueZ, proposedAnswer];
  }
  setNewValues = newValuesArray =>
    this.setState({
      valueX: newValuesArray[0],
      valueY: newValuesArray[1],
      valueZ: newValuesArray[2],
      proposedAnswer: newValuesArray[3]
    });
  handleAnswer = event =>  {
    const newValues = this.getNewValues();
    this.setNewValues(newValues);
    const answerWasCorrect = this.evaluateAnswer(event.target.name);
  }
  evaluateAnswer(givenAnswer) {
    const { valueX, valueY, valueZ, proposedAnswer } = this.state;
    const correctAnswer = valueX + valueY + valueZ;

    return (
      (correctAnswer === proposedAnswer && givenAnswer === 'true') ||
      (correctAnswer !== proposedAnswer && givenAnswer === 'false')
    );
}