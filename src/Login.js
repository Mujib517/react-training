import React, { Component } from "react";
import axios from "axios";
import config from "./config";
import Error from "./Error";


class Login extends Component {

    state = { hasError: false, username: "", password: "" };

    handleUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    handlePwd = (e) => {
        this.setState({ password: e.target.value });
    }

    login = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitted", this.state);
            const res = await axios.post(config.host + "/api/users/login", this.state);
            console.log(res);
            this.setState({ hasError: false });
            localStorage.setItem("token", res.data.token);
            this.props.history.push("/products");
        } catch (e) {
            this.setState({ hasError: true })
        }
    }

    render() {
        return <div className="col-md-8">
            {this.state.hasError && <Error msg="Wrong username or password" />}
            <div className="card">
                <div className="card-header">
                    <h1>Login</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={this.login}>
                        <div>
                            <input type="text" onChange={this.handleUsername} className="form-control" placeholder="Username" />
                            <br />
                        </div>
                        <div>
                            <input type="password" onChange={this.handlePwd} className="form-control" placeholder="password" />
                            <br />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    }

}


export default Login;