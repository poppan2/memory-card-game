import React from 'react'
import './App.css';
import CardGame from './CardGame';

function App() {

  

  return (
    <div className="App">
  <header>
    <h1>Memory Game</h1>
    <nav>
      <a href="#instructions">Instructions</a>
      <a href="#game-board">Game</a>
    </nav>
  </header>

  <main>
    <div>
      <h2 id="instructions">Instructions</h2>
      <p>Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game
        is to turn over pairs of matching cards.</p>
      <div>
        <div id="message"></div>
        <div id="game-board" className="board">
          <CardGame />
        </div>
      </div>
    </div>
  </main>

  <footer className="clearfix">
    <p className="copyright">COPYRIGHT 2017</p>
    <p className="message">Created with &hearts; by <span className="name">GA</span></p>

  </footer>
    </div>
  );
}

export default App;
