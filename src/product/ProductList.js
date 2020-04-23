import React, { Component } from "react";
import Product from "./Product";
import "./ProductList.css";
import Loading from "../Loading";
import Error from "../Error";
import NewComponentLink from "./NewComponentLink";
import { getProducts } from "../services/ProductService";

// angular   js inside html
// JSP
// react    html (jsx) inside js

export default class ProductList extends Component {

    state = { products: [], error: false, loading: true };

    constructor() {
        super();

        getProducts()
            .then(res => this.setState({ products: res.data.data, loading: false }))
            .catch(err => this.setState({ error: true, loading: false }))
    }

    render() {
        const { error, loading, products } = this.state;

        return <div className="offset-md-1">
            <h2>Products</h2>
            {/* {this.state.loading ? <Loading /> : null} */}
            <NewComponentLink />
            {error && <Error />}
            {loading && <Loading />}
            {products.map(product => <Product product={product} />)}
        </div>
    }
}

