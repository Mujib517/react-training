
import React from "react";


// class BaseMobile {
//     state = {};

//     render() { }

//     m1() { }
// }

// class Mobile extends BaseMobile {
//     state = { count: 0 };
//     call() {
//         console.log(this.state, this.m1())
//     }

//     render() {
//         return "new Mobile";
//     }
// }

// functional components: stateless (16.8)
// class components : stateful


// const fun = () => console.log("dkajfk");

// const x = fun; // x is function, no calling
// const y = fun(); // undefined. calling

// Synthetic events
// Java library JSOn
// React JS library

class Counter extends React.Component {

    state = { count: 10 }
    constructor() {
        super();

        // this.inc = this.inc.bind(this);
        // this.dec = this.dec.bind(this);
    }

    inc = () => {
        // cannot read property state of undefined
        // i m chaning state & i want re render
        this.setState({ count: ++this.state.count });
    }

    dec = () => {
        this.setState({ count: --this.state.count });
    }

    render() {
        const btnStyle = {
            margin: "5px", width: 100, height: 30,
            backgroundColor: "transparent"
        };
        return <>
            <h1>Counter {this.state.count}</h1>
            <button onClick={this.inc} style={btnStyle}>++</button>
            <button onClick={this.dec} style={btnStyle}>--</button>
        </>
    }
}

export default Counter;