import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";
import "./ProductList.css";
import Loading from "./Loading";
import Error from "./Error";

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
            {/* {this.state.loading ? <Loading /> : null} */}

            {this.state.error && <Error />}
            {this.state.loading && <Loading />}
            {this.state.products.map(product => <Product product={product} />)}
        </div>
    }
}

