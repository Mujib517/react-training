import React, { Component } from "react";
import axios from "axios";

// Synchronous, Asynchronous (timer,events, web api calls, db, file etc)
// 
export default class Users extends Component {

    state = { users: [] };

    constructor() {
        super();

        axios.get("https://api.github.com/users")
            .then((response) => {
                this.setState({ users: response.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return <>
            <h1>Users</h1>
            {this.state.users.map(user => <div>
                <h4 className="text-muted">{user.login}</h4>
                <img className="rounded img img-thumbnail" width="120" height="120" src={user.avatar_url} />
            </div>
            )}
        </>
    }
}