import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

// live reload
// obfuscation
// ctrl + .
// library used to build UIs
// axios

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
