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


    // once
    constructor() {
        super();

        this.state = {
            page: 0, pageSize: 200,
            products: [], error: false,
            loading: true,
            totalPages: 0
        };
    }

    // once
    componentDidMount() {
        this.get();
    }

    onDel = () => this.get();

    get = async () => {
        // getProducts()
        //     .then(res => this.setState({ products: res.data.data, loading: false }))
        //     .catch(err => this.setState({ error: true, loading: false }));
        try {
            const res = await getProducts(this.state.page, this.state.pageSize);
            this.setState({
                totalPages: res.data.metadata.pages,
                products: res.data.data, loading: false
            });
        } catch (e) {
            this.setState({ error: true, loading: false })
        }
    }

    prev = () => {
        const idx = this.state.page;
        this.setState({ page: idx - 1 }, () => {
            this.get();
        });
    }

    next = () => {
        const idx = this.state.page;
        this.setState({ page: idx + 1 }, () => {
            this.get();
        });
    }

    render() {
        const { error, loading, products } = this.state;

        return <div className="offset-md-1 col-md-8">
            <div>
                <h2>Products</h2>
                <NewComponentLink />
                <div className="row">
                    <div className="pull-left">
                        <h4>Showing page {this.state.page + 1} of {this.state.totalPages}</h4>
                    </div>
                    <div class="pull-right">
                        <button
                            disabled={this.state.page === 0}
                            onClick={this.prev} style={{ margin: "5px" }}
                            className="btn btn-info">
                            <i className="fa fa-arrow-left" />
                        </button>
                        <button
                            disabled={this.state.page === this.state.totalPages - 1}
                            onClick={this.next} className="btn btn-info">
                            <i className="fa fa-arrow-right" />
                        </button>
                    </div>
                </div>
            </div>
            {/* {this.state.loading ? <Loading /> : null} */}

            {error && <Error />}
            {loading && <Loading />}
            {products.map(product => <Product key={product._id}
                product={product}
                onDelete={this.onDel} />)}
        </div>
    }
}

