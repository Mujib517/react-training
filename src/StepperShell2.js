import React, { useState } from "react";
import "./StepperShell.css";

export const Item = (props) => <li>{props.children.map}</li>

const StepperShell2 = (props) => {

    const [tabIndex, setTabIndex] = useState(0);

    const next = () => setTabIndex(tabIndex + 1);
    const prev = () => setTabIndex(tabIndex - 1);

    const isPropertyExists = () => props.children[tabIndex].props.children.props.isValid !== undefined
    const isLastTab = () => tabIndex === props.children.length - 1;
    const isCurrentTabValid = () => isPropertyExists() ?
        props.children[tabIndex].props.children.props.isValid : true;
    const shouldDisableNext = () => !isCurrentTabValid() || isLastTab();

    return <div className="col-md-8">
        <div className="card">
            <div className="card-header">
                <ul className='nav nav-wizard'>
                    {props.children.map((child, i) =>
                        <li key={i} className={i === tabIndex ? "active" : ""}>{child.props.title}</li>)}
                </ul>
            </div>
            <div className="card-body">
                {props.children[tabIndex]}
            </div>

            <div className="card-footer">
                <div className="btn-group pull-right">
                    <button className="btn btn-sm btn-success"
                        onClick={prev} disabled={tabIndex === 0}>
                        <i className="fa fa-chevron-left"></i>
                        &nbsp;
                        Prev
                    </button>
                    <button className="btn btn-sm btn-success" disabled={shouldDisableNext()}
                        onClick={next}>
                        Next&nbsp;
                        <i className="fa fa-chevron-right"></i>
                    </button>
                    <button className="btn btn-sm btn-success" disabled={!shouldDisableNext()}>
                        Submit &nbsp;
                        <i className="fa fa-check"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
}


export default StepperShell2;