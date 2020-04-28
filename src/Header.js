import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {

    // local storage- per person
    const logout = () => {
        localStorage.removeItem("token");
        // props.history.push("/login");
    }

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">My Cool App</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login">
                        <button class="btn btn-danger">Login</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <button class="btn btn-danger" onClick={logout}>Logout</button>
                </li>
            </ul>
        </div>
    </nav>;
}

export default Header;
