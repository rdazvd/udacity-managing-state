import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    const initializeValues = this.getNewValues();
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
    const proposedAnswer = Math.floor(Math.random() * 3) + (valueX + valueY + valueZ);
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
    this.props.handleAnswer(answerWasCorrect);
  }
  evaluateAnswer(givenAnswer) {
    const { valueX, valueY, valueZ, proposedAnswer } = this.state;
    const correctAnswer = valueX + valueY + valueZ;

    return (
      (correctAnswer === proposedAnswer && givenAnswer === 'true') ||
      (correctAnswer !== proposedAnswer && givenAnswer === 'false')
    );
  }
  render() {
    const { valueX, valueY, valueZ, proposedAnswer } = this.state;
    return (
      <div>
        <div className="equation">
          <p className="text">{`${valueX} + ${valueY} + ${valueZ} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name="true">
          True
        </button>
        <button onClick={this.handleAnswer} name="false">
          False
        </button>
      </div>
    );
  }
}

export default Game;