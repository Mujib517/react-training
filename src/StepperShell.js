import React, { useState } from "react";
import "./StepperShell.css";

const Journey = ({ onChange, state }) => {

    const [location, setLocation] = useState(state.location);
    console.log(state, 'child');

    const handleInput = (e) => {
        // state handling
        setLocation(e.target.value);
        if (e.target.value) onChange(e.target.value);
        else onChange(e.target.value);
    }

    return <div>
        <h1>Journey</h1>
        <div>
            <input value={location} onChange={handleInput} type="text"
                placeholder="From" className="form-control" />
        </div>
    </div>
}

const PersonalDetails = () => <div>
    <h1>PersonalDetails</h1>
</div>

const Payment = () => <div>
    <h1>Payment</h1>
</div>

const Summary = () => <div>
    <h1>Summary</h1>
</div>


const StepperShell = ({}) => {

    const [journeyState, setJourneyState] = useState({ location: "Hyderabad" });

    const journeyChanged = (val) => {
        const newConfig = { ...config }; // clone 
        newConfig.tabs[0].isValid = !!val;
        setJourneyState(() => {
            return { location: val }
        });
        setConfig(newConfig);
        console.log(val);
    }

    const [config, setConfig] = useState({
        tabs: [{
            name: "Journey",
            component: <Journey state={journeyState} onChange={journeyChanged} />,
            isValid: false
        }, {
            name: "Personal Details",
            component: <PersonalDetails />,
            isValid: true
        }, {
            name: "Payment",
            component: <Payment />,
            isValid: true
        }, {
            name: "Summary",
            component: <Summary />,
            isValid: true
        }]
    });

    const [tabIndex, setTabIndex] = useState(0);

    const next = () => setTabIndex(tabIndex + 1);
    const prev = () => setTabIndex(tabIndex - 1);

    const isLastTab = () => tabIndex === config.tabs.length - 1;
    const isCurrentTabValid = () => config.tabs[tabIndex].isValid;
    const shouldDisableNext = () => !isCurrentTabValid() || isLastTab();


    return <div className="col-md-8">
        <div className="card">
            <div className="card-header">
                <ul class='nav nav-wizard'>
                    {config.tabs.map((tab, i) => <li className={tabIndex === i ? "active" : ""}>{tab.name}</li>)}
                </ul>
            </div>
            <div className="card-body">
                {config.tabs[tabIndex].component}
            </div>
            <div className="card-footer">
                <div className="btn-group pull-right">
                    <button className="btn btn-sm btn-success"
                        onClick={prev} disabled={tabIndex === 0}>
                        <i className="fa fa-chevron-left"></i>
                        &nbsp;
                        Prev
                    </button>
                    <button className="btn btn-sm btn-success" onClick={next}
                        disabled={shouldDisableNext()}>
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


export default StepperShell;