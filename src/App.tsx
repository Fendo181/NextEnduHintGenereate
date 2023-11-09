import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const texts = [
    'じゃがいも',
    '楽天西友ネットスーパー',
    'ハイボール',
  ];

  // テキストをランダムに表示する
  const [randomText, setRandomText] = useState('');

  // ボタンがクリックされたときのハンドラー
  const generateRandomText = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setRandomText(texts[randomIndex]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Next Endu Hint Generate</h3>
        <p>{randomText}</p>
        <button onClick={generateRandomText}>Next Endu Hint!</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>こんにちは！！！</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
