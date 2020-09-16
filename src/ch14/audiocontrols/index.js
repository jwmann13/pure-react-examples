import React, { useState } from "react";

import Button from "../button";

function AudioControl(props) {
    const [controls, setControls] = useState({
        volume: 8,
        treble: 5,
        mid: 5,
        bass: 6,
    });

    console.log(controls);

    const handleChange = (name, value) => {
        setControls({ ...controls, [name]: value });
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100vh" }}
        >
            {Object.keys(controls).map((key, i) => (
                <Control
                    key={key + i}
                    name={key}
                    initialValue={controls[key]}
                    updateParent={handleChange}
                ></Control>
            ))}
        </div>
    );
}

function Control({ initialValue, name, updateParent }) {
    const [value, setValue] = useState(initialValue);

    // useEffect(() => updateParent(name, value))

    const decrVal = () => {
        setValue(val => val - 1);
    };

    const incrVal = () => {
        setValue(val => val + 1);
        // updateParent(name, value);
    };

    return (
        <div
            className="d-flex justify-content-between mb-3"
            style={{ width: "30%" }}
        >
            <Button variant="dark" onAction={decrVal} disabled={value < 1}>
                -
            </Button>
            <span className="text-center">
                <span className="value" style={{ fontSize: "2em" }}>
                    {value}
                </span>
                <br />
                <strong className="">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </strong>
            </span>
            <Button variant="dark" onAction={incrVal} disabled={value > 9}>
                +
            </Button>
        </div>
    );
}

export default AudioControl;
