import React, { Component } from "react";
import axios from "axios";
import User from "./User";

// Synchronous, Asynchronous (timer,events, web api calls, db, file etc)
// static code analysis tool: CheckMarx
// Representional state transfer
// everything is resource
// Verbs GET, POST, PUT and DETELE 
// GET - read. safe operation
// POST - create. unsafe
// PUT - update. unsafe
// DELETE - delete. unsafe

// Request {url,body,headers}
// headers: {authorization:'token', accept:'application/json',content-type:'application/json',x-custom:'abc'}
// Response
// {status:200,statusText:"OK",data:[],headers:{content-type:'application/xml'}}
// Status
// 1xx - Information 
// 2xx - Success (200 ok , 201 created 204 content)
// 3xx - Redirects 
// 4xx - client error (404 not found, 401 unauthorized, 400)
// 5xx - Server error (501 internal server)

// authentication
// Basic auth  {authorization:'adfajdk32932323:adjfkdaj'}
// Token

// function: dumb (render o/p)
// class: state
export default class Users extends Component {

    state = { users: [], error: false };

    constructor() {
        super();

        axios.get("https://api.github.com/users")
            .then((response) => {
                console.log(response);
                this.setState({ users: response.data })
            })
            .catch((err) => {
                this.setState({ error: true });
            })
    }

    // truthy falsy
    render() {
        const { error, users } = this.state;
        return <>
            {error ? <div className="alert alert-danger">Failed to load data</div> :
                null}
            <h1>Users</h1>
            {users.map(user => <User user={user} />)}
        </>
    }
}