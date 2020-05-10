import React, { useState } from "react";
import StepperShell2, { Item } from "./StepperShell2";

const Journey = ({ onChange, state }) => {
    console.log("props", state);
    const [location, setLocation] = useState(state.location);

    const handleInput = (e) => {
        setLocation(e.target.value);
        onChange(e.target.value);
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


const About = () => {

    const [journeyState, setLocation] = useState({ location: "" });

    const onJourneyChange = (val) => {
        setLocation({ location: val });
    }

    return <StepperShell2>
        <div title="Journey">
            <Journey isValid={!!journeyState.location}
                onChange={onJourneyChange}
                state={journeyState} />
        </div>
        <div title="Personal Details">
            <PersonalDetails />
        </div>
        <div title="Payment">
            <Payment />
        </div>
        <div title="Summary">
            <Summary />
        </div>
    </StepperShell2>
}

export default About;
