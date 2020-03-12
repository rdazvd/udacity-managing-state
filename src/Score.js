import React from 'react';

const Score = ({numCorrect, numQuestions}) => (
  <p className="text">
    Your Score: {numCorrect}/{numQuestions}
  </p>
);

export default Score;