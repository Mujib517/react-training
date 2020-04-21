import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";

// angular   js inside html
// JSP
// react    html (jsx) inside js

export default class ProductList extends Component {

    state = { products: [], error: false };

    constructor() {
        super();

        axios.get("https://exp-rest-api.herokuapp.com/api/products")
            .then(res => this.setState({ products: res.data.data }))
            .catch(err => this.setState({ error: true }))
    }

    render() {
        return <div className="offset-md-1">
            <h2>Products</h2>
            {this.state.products.map(product => <Product product={product} />)}
        </div>
    }
}

