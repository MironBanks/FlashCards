import React from 'react';

function App() {
  return (
    <h1>hello world</h1>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    questions: 'What is 2 + 2?',
    answer: 4,
    options: [
      '1',
      '5',
      '4',
      '6'
    ]
  },
  {
    id: 2,
    questions: 'Question number 2',
    answer: 5,
    options: [
      '1',
      '5',
      '4',
      '6'
    ]
  },
  {
    id: 3,
    questions: 'Question number 3',
    answer: 'test',
    options: [
      '1',
      '5',
      '4',
      '6'
    ]
  }
]

export default App;
