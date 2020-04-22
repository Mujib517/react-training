import React, { Component } from "react";
import axios from "axios";
import config from "../config";

export default class ProductList extends Component {

    state = {
        brand: "", model: "", price: 0, inStock: false,
        hasError: true,
        errors: []
    }

    onBrandChange = (event) => {
        this.setState({ brand: event.target.value });
    }

    validate = () => {
        const err = [];
        if (!this.state.brand) {
            err.push("Brand is Invalid");
        }
        if (!this.state.model) {
            err.push("Model is Invalid");
        }
        if (!this.state.price) {
            err.push("Price is Invalid");
        }
        if (err.length > 0) this.setState({ hasError: true, errors: err });
        else this.setState({ hasError: false });
    }

    onSave = () => {
        this.validate();
        // show success message
        // show error message
        // clear the state
        // show the loader

        // CORS 
        // www.client.com
        // www.server.com/api
        if (!this.state.hasError) {

            var formData = new FormData();
            formData.append("brand", this.state.brand);
            formData.append("model", this.state.model);
            formData.append("price", this.state.price);
            formData.append("inStock", this.state.inStock);
            formData.append("img", this.state.image);

            var configObj = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };

            axios.post(`${config.host}/api/products`, formData, configObj)
                .then(res => this.props.history.push("/products"))
                .catch(err => console.log(err));
        }
    }

    render() {
        return <div className="col-md-4">
            {this.state.hasError && this.state.errors.length > 0 && <ValidationErrors errors={this.state} />}
            <div className="card">
                <div className="card-header">Add New Component</div>
                <div className="card-body">
                    <input className="form-control"
                        onChange={this.onBrandChange}
                        placeholder="Enter Brand" type="text" />

                    <input type="text" className="form-control" placeholder="Model"
                        onChange={evt => this.setState({ model: evt.target.value })} />

                    <input type="number" className="form-control" placeholder="Price"
                        onChange={evt => this.setState({ price: evt.target.value })} />

                    Instock: <input type="checkbox"
                        onChange={evt => this.setState({ inStock: evt.target.checked })} />

                    <input type="file" onChange={e => this.setState({ image: e.target.files[0] })} />

                </div>
                <div className="card-footer">
                    <button onClick={this.onSave} class="btn btn-success">Save</button>
                </div>
            </div>
        </div>
    }
}

const ValidationErrors = ({ errors }) => <div className="alert alert-danger">
    <ul class="list-group list-group-flush">
        {errors.map(err => <li class="list-group-item">{err}</li>)}
    </ul>
</div>