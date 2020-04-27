
import React from "react";

// Find file Ctrl + E
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
// props are readonly
// state is mutable

class Counter extends React.Component {

    // state = { count: this.props.count ? this.props.count : 0 };
    state = { count: this.props.count || 0 };

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillUnmount() {
        console.log("Comonent removed");
    }


    inc = () => {
        // mutate
        let cnt = this.state.count;
        this.setState({ count: ++cnt });
    }

    dec = () => {
        let cnt = this.state.count;
        this.setState({ count: --cnt });
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