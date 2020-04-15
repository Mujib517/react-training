
import React from "react";
import User from "./User";
// es6 module

// function declration
// function Header() {
//     return <h1>Header Component</h1>
// }

// function expression
// const Header = function () {
//     return <h1>Header Component</h1>
// }

const Header = () => {
    return <>
        <h5>Header Component</h5>
        <User name="Nikesh" age="20" dept="IT" />
    </>

}

export default Header;
