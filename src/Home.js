import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Timer from "./Timer";

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

const Home = () => <>
    <Name name={10} />
    <h1>Home Component</h1>
    <Timer />
</>

export default Home;
