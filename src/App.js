import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from './Footer';
import Counter from "./Counter";

// live reload
// obfuscation
// ctrl + .

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
