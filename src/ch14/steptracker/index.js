import React, { useState } from "react";
import Button from "../button";

const StepTracker = () => {
    const [steps, setSteps] = useState(0);

    const increment = () => {
        setSteps(steps => steps + 1);
    }

    return <div>
        you have taken {steps} steps today
        <br />
        <Button variant="primary" onAction={increment}>I took a step</Button>
    </div>;
};

export default StepTracker;
