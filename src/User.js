
import React from "react";

// const User = () => <h1>Hello Nikesh!</h1>;
// h1 - h6
// properties
// object
// es6
// open h1{color:red}
// consumer User
// snake casing
// camel casing
// parent
// siblings
// children
// React fragments

function User(props) {
    const { name, age, dept } = props;

    const styleObj = {
        color: "red",
        borderBottom: "1px solid grey",
        borderRadius: "10px"
    };

    return <div>
        <h5 style={styleObj}>Hello {name}</h5>
        <h6>You are {age} years old</h6>
        <h6>You are from {dept}</h6>
    </div>
}

export default User;
