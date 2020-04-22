import React from "react";
import { Link } from "react-router-dom";

const NewComponentLink = () => <div style={{ margin: "10px" }}>
    <Link to="/product/new">
        <button className="btn btn-danger">
            New Product &nbsp;
            <i className="fa fa-plus"></i>
        </button>
    </Link>
</div>;

export default NewComponentLink;
