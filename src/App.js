import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductList from './product/ProductList';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import NewProduct from './product/NewProduct';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import ProductDetail from './product/ProductDetail';

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
        <Route path="/product/new" component={NewProduct} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
