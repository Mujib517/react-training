import React from "react";
import NoImg from "./assets/img/noImg.jpeg";
import moment from "moment";

const Product = ({ product }) => <div class="col-lg-4 col-md-5 col-sm-8">
    <div className="card">
        <img alt="img" className="card-img-top"
            src={product.image ? product.image : NoImg} />

        <h4 className="card-header">{product.brand} {product.model}</h4>
        <div className="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${product.price}</li>
                <li class="list-group-item">InStock?: <input type="checkbox" checked={product.inStock} /></li>
                <li class="list-group-item">Updated: {moment(product.lastUpdated).fromNow()}</li>
            </ul>
        </div>
        <div className="card-footer">
            <button disabled={!product.inStock} className="btn btn-primary">
                Add to cart &nbsp;
                <i class="fa fa-cart-plus"></i>
            </button>
        </div>
    </div>
    <br />
</div>;

export default Product;