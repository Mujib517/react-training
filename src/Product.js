import React from "react";
import NoImg from "./assets/img/noImg.png";
import moment from "moment";

const Product = ({ product }) => <div className="card col-md-5">
    <img className="card-img-top" src={product.image ? product.image : NoImg} width="200" height="200" />
    <div className="card-body">
        <h4>{product.brand} {product.model} </h4>
        <b>$ {product.price}</b>
        <h6>InStock?: <input type="checkbox" checked={product.inStock} /></h6>
        <h6 className="text-muted">Updated: {moment(product.lastUpdated).fromNow()}</h6>

        <button disabled={!product.inStock} className="btn btn-primary">Add to cart</button>
    </div>
</div>;

export default Product;