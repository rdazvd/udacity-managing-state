import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0
    };
  }
  handleAnswer(guessIsCorrect) {
    if (guessIsCorrect)
      this.setState(currentState => ({
        numCorrect: currentState.numCorrect + 1
      }));
    this.setState(currentState => ({
      numQuestions: currentState.numQuestions + 1
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer={this.handleAnswer} />
          <p className="text">
            Your Score: {this.numCorrect}/{this.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
