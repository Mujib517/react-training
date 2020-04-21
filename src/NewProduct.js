import React, { Component } from "react";

export default class ProductList extends Component {

    state = { brand: "" }

    onBrandChange = (event) => {
        this.setState({ brand: event.target.value });
    }

    render() {
        return <div className="col-md-4">
            <div className="card">
                <div className="card-header">Add New Component</div>
                <div className="card-body">
                    <input className="form-control"
                        onChange={this.onBrandChange}
                        placeholder="Enter Brand" type="text" />
                    <h6>{this.state.brand}</h6>
                </div>
                <div className="card-footer">
                    <button class="btn btn-success">Save</button>
                </div>
            </div>
        </div>
    }
}