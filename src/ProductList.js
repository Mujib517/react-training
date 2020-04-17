import React, { Component } from "react";
import axios from "axios";

// angular   js inside html
// JSP
// react    html (jsx) inside js

export default class ProductList extends Component {

    state = { products: [], error: false };

    constructor() {
        super();

        axios.get("https://dl-product.herokuapp.com/api/products")
            .then(res => this.setState({ products: res.data.data }))
            .catch(err => this.setState({ error: true }))
    }

    render() {
        return <>
            <h2>Products</h2>
            {this.state.products.map(product => <h1>{product.model}</h1>)}
        </>
    }
}