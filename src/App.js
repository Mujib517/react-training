import React from 'react';
import './App.css';
import Counter from "./Counter";
import Timer from './Timer';

// live reload
// obfuscation
// ctrl + .

function App() {
  return (
    <div className="App">
      <Timer />
      <Counter count="0" />
    </div>
  );
}

export default App;
