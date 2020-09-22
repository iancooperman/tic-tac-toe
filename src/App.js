import React from 'react';
import './App.css';
import TicTacToeBoard from './TicTacToeBoard'

function App() {
  return (
    <div className="App">
      <TicTacToeBoard boardSize={3}/>
    </div>
  );
}

export default App;
