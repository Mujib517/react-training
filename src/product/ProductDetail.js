import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import Product from "./Product";
import { getProductById } from "../services/ProductService";

const Review = ({ review }) => <>
    <b>{review.name}</b>
    <h6>{review.subject}  Rating: {review.rating} *</h6>
    <div>{review.message}</div>
    <hr />
</>;

const Reviews = ({ reviews }) => <>
    <h4>Reviews</h4>
    <hr />
    {reviews && reviews.map(review => <Review review={review} />)}
    {(!reviews || reviews.length === 0) && <h5>Be the first one to review</h5>}
</>

class ProductDetail extends Component {

    state = { product: {} };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getProductById(id)
            .then(res => this.setState({ product: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return <>
            <h2>Product Detail</h2>
            <Product product={this.state.product} />
            <Reviews reviews={this.state.product.reviews} />
        </>
    }
}

export default ProductDetail;

// Basic Auth (username & password base64) 
// Token auth
// Third party (Facebook,Google,)