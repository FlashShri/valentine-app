import React, { useState } from 'react';
import './App.css';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const getNoButtonSize = () => {
    const baseSize = 100;
    const reduction = noCount * 15;
    return Math.max(baseSize - reduction, 20);
  };

  const getYesButtonSize = () => {
    const baseSize = 100;
    const increase = noCount * 20;
    return baseSize + increase;
  };

  const getNoMessage = () => {
    const phrases = [
      '',
      'Are you sure? 🥺',
      "Really? Think about all the fun we'll have! 😊",
      'Think again! I promise to be the best Valentine! 💕',
      "Last chance! Don't break my heart! 💔",
      "Surely not? We'd be perfect together! ✨",
      'You might regret this! Just saying... 😅',
      'Give it another thought! Pretty please? 🙏',
      'Are you absolutely certain? The cats will be sad! 😿',
      "This could be a mistake! I'll bring snacks! 🍕",
      "The 'Yes' button is right there... just click it! 👉",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  if (yesPressed) {
    return (
      <div className="App celebration">
        <div className="hearts-background"></div>
        <div className="content">
          <h1 className="celebration-title">🎉 Yaaay! 🎉</h1>
          <div className="cat-celebration">
            <span className="cat-emoji">🐱</span>
            <span className="cat-emoji">😻</span>
            <span className="cat-emoji">🐱</span>
          </div>
          <p className="celebration-text">I'm the happiest person alive! ❤️</p>
          <p className="celebration-subtext">
            Can't wait to spend Valentine's Day with you! 💕
          </p>
          <div className="floating-hearts">
            <span>💖</span>
            <span>💗</span>
            <span>💓</span>
            <span>💕</span>
            <span>💝</span>
            <span>💖</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="hearts-background"></div>
      <div className="content">
        <div className="cat-container">
          <span className="cat-emoji main-cat">😻</span>
          <span className="cat-emoji side-cat left">🐱</span>
          <span className="cat-emoji side-cat right">🐱</span>
        </div>

        <h1 className="main-title">Will You Be My Valentine? 💝</h1>

        <p className="subtitle">
          I promise unlimited cuddles and cat videos! 🐾
        </p>

        <div className="button-container">
          <button
            className="yes-button"
            style={{
              fontSize: `${getYesButtonSize() * 0.2}px`,
              padding: `${getYesButtonSize() * 0.15}px ${getYesButtonSize() * 0.3}px`,
            }}
            onClick={handleYesClick}
          >
            Yes! 💕
          </button>

          {getYesButtonSize() < 500 && (
            <button
              className="no-button"
              style={{
                fontSize: `${getNoButtonSize() * 0.16}px`,
                padding: `${getNoButtonSize() * 0.12}px ${getNoButtonSize() * 0.24}px`,
              }}
              onClick={handleNoClick}
            >
              No
            </button>
          )}
        </div>

        {getYesButtonSize() >= 500 && (
          <p className="message-text">
            The "No" button gave up! There's only one choice now! 💕
          </p>
        )}

        {noCount > 0 && <p className="message-text">{getNoMessage()}</p>}
      </div>
    </div>
  );
}

export default App;
