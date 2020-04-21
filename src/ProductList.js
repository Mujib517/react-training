import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";
import LoadingImg from "./assets/img/loading.gif";
import "./ProductList.css";

// angular   js inside html
// JSP
// react    html (jsx) inside js

export default class ProductList extends Component {

    state = { products: [], error: false, loading: true };

    constructor() {
        super();
        axios.get("https://exp-rest-api.herokuapp.com/api/products")
            .then(res => this.setState({ products: res.data.data, loading: false }))
            .catch(err => this.setState({ error: true, loading: false }))
    }

    render() {
        return <div className="offset-md-1">
            <h2>Products</h2>
            {this.state.loading ?
                <div className="loader">
                    <img src={LoadingImg} />Loading...
            </div> : null}
            {this.state.products.map(product => <Product product={product} />)}
        </div>
    }
}

