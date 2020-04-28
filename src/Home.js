import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Timer from "./Timer";
import Login from "./Login";

const Name = ({ name }) => <h4>Hello, {name}</h4>

Name.propTypes = {
    name: PropTypes.string.isRequired
}
/*
Mounting
———————————————
constructor()
render()
componentDidMount()
    
Updating
————————————————
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate(pProps,pState)
componentDidUpdate()

Unmount
——————————————————
componentWillUnmount()

Error handling
——————————————————-
componentDidCatch()
*/

// apache 
// Nginx

const Home = () => <>
    <Name name={10} />
    <h1>Home Component</h1>
    <Parent />
</>

// context api
const NameContext = React.createContext();

const Parent = () => <>
    <h4>Parent</h4>
    <NameContext.Provider value={100}>
        <Level1 />
    </NameContext.Provider>
</>

const Level1 = () => <>
    <h4>Level 1</h4>
    <Level2 />
</>


const Level2 = () => <>
    <h4>Level 2</h4>
    <Level3 />
</>


const Level3 = () => <>
    <h4>Level 3</h4>
    <NameContext.Consumer>
        {value => <h4>{value}</h4>}
    </NameContext.Consumer>
</>


export default Home;
