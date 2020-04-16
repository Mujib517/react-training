import React, { Component } from "react";

export default class Timer extends Component {

    state = { count: 0, date: new Date().toTimeString() };

    // timer setTimeout, setInterval

    constructor() {
        super();

        setInterval(() => {
            this.setState({ date: new Date().toTimeString() });
        }, 1000);
    }

    render() {
        return <>
            <h1>Count: {this.state.date}</h1>
        </>
    }
}