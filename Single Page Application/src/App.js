import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['додаток', 'частина додадку або сторінки', 'я не знаю, що це'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Це звичайний HTML',
      'Це функція',
      'Це такий же HTML, але з можливістю виконувати Js-код'],
    correct: 2,
  },
  {
    title: 'Скільк основних типів існує в JS?',
    variants: [
      '8',
      '6',
      '9'],
    correct: 0,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ви відгадали {correct} відповіді з {questions.length}</h2>
      <a href = "/">
      <button>Спробувати знову</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const persantage = Math.round(step / questions.length * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${persantage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key ={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
  const[step, setStep] = React.useState(0);
  const[correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) =>{
    setStep(step + 1);
    if(index === question.correct){
      setCorrect(correct + 1);
    }

    console.log(step, index);
  }

  return (
    <div className="App">
      {
        step !== questions.length ? <Game step = {step} question = {question} onClickVariant = {onClickVariant}/> : <Result correct = {correct} />
      }
    </div>
  );
}

export default App;
