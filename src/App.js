import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductList from './ProductList';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';

// live reload
// obfuscation
// ctrl + .
// library used to build UIs
// axios

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={ProductList} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
