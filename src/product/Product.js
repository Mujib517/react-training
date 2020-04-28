import React from "react";
import NoImg from "../assets/img/noImg.jpeg";
import moment from "moment";
import { deleteProduct } from "../services/ProductService";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// const onDelete = (id) => {
//     deleteProduct(id)
//         .then(res => console.log(res))
//         .catch(err => console.log(err));
// }

// const Product = ({ product,onDelete }) => <div class="col-lg-4 col-md-5 col-sm-8">
//     <div className="card">
//         <img alt="img" className="card-img-top"
//             src={product.image ? product.image : NoImg} />

//         <h4 className="card-header">{product.brand} {product.model}</h4>
//         <div className="card-body">
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">${product.price}</li>
//                 <li class="list-group-item">InStock?: <input type="checkbox" checked={product.inStock} /></li>
//                 <li class="list-group-item">Updated: {moment(product.lastUpdated).fromNow()}</li>
//             </ul>
//         </div>
//         <div className="card-footer">
//             <button disabled={!product.inStock} className="btn btn-primary">
//                 Add to cart &nbsp;
//                 <i class="fa fa-cart-plus"></i>
//             </button>
//             <button onClick={() => onDelete(product._id)} className="btn btn-danger btn-sm pull-right">
//                 <i class="fa fa-close"></i>
//             </button>
//         </div>
//     </div>
//     <br />
// </div>;

const Product = ({ product, onDelete }) => {

    const onRemove = async () => {
        // deleteProduct(product._id)
        //     .then(res => onDelete())
        //     .catch(err => console.log(err));
        try {
            await deleteProduct(product._id);
            onDelete(); // notify parent productList component
        } catch (e) {
            console.log(e);
        }
    }

    return <div className="col-lg-8 col-md-6 col-sm-12">
        <div className="card">
            <img alt="img" className="card-img-top"
                src={product.image ? product.image : NoImg} />

            <h4 className="card-header">{product.brand} {product.model}</h4>
            <Link to={`/product/${product._id}`}>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">${product.price}</li>
                        <li className="list-group-item">InStock?: <input type="checkbox" readOnly checked={product.inStock} /></li>
                        <li className="list-group-item">Updated: {moment(product.lastUpdated).fromNow()}</li>
                    </ul>
                </div>
            </Link>
            <div className="card-footer">
                <button disabled={!product.inStock} className="btn btn-primary">
                    Add to cart &nbsp;
                <i className="fa fa-cart-plus"></i>
                </button>
                <button onClick={onRemove} className="btn btn-danger pull-right">
                    Delete &nbsp;
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
        <br />
    </div>;
}

Product.propTypes = {
    onDelete: PropTypes.func.isRequired,
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inStock: PropTypes.bool.isRequired,
        image: PropTypes.string
    })
}

export default Product;