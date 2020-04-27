import React, { Component } from "react";

export default class Timer extends Component {

    state = { count: 0, date: new Date().toTimeString() };
    timer = null;

    // timer setTimeout, setInterval

    constructor() {
        super();
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("incrementing");
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    // x times
    // Observables
    componentDidUpdate() {
        console.log("inside did mount");
    }

    shouldComponentUpdate(prp, state) {
        if (state.count >= 10) return false;
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState.count, this.state.count);
    }

    // once
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <>
            <h1>Count: {this.state.count}</h1>
        </>
    }
}