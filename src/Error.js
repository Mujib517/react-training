import React from "react";

const Error = ({ msg }) => <div class="alert alert-danger col-md-6">
    <h6>{msg || "Something went wrong!"}</h6>
</div>;

export default Error;
