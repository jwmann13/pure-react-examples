import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen, } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";

import "./keypad.scss";

const reducer = (state, action) => {
    switch (action.type) {
        case "check":
            return [...state, action.key];
        case "clear":
            return [];
        default:
            break;
    }
};

function Keypad({ keyNums, combination }) {
    const keypad = keyNums
        ? keyNums
        : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const [strokes, dispatch] = useReducer(reducer, []);

    const handleStroke = (e, key) => {
        e.preventDefault();
        dispatch({
            type: "check",
            key,
        });
    };

    const handleClear = (e) => {
        e.preventDefault();
        dispatch({ type: "clear" });
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <span
                className={`feedback ${
                    strokes.length >= 6 && strokes.join("") !== combination
                        ? "error animate"
                        : ""
                } ${strokes.join("") === combination ? "success animate" : ""}`}
            >
                <FontAwesomeIcon icon={strokes.join("") === combination ? faLockOpen : faLock} />
            </span>
            <span className="output">{strokes.join("-")}</span>
            <div className="keypad row">
                {keypad.map((key, i) => (
                    <Button
                        key={key + i}
                        variant="light"
                        className="col-4"
                        onAction={(e) => handleStroke(e, key)}
                        disabled={strokes.length > 5}
                    >
                        {key}
                    </Button>
                ))}
                <Button variant="danger" className="col" onAction={handleClear}>
                    Clear
                </Button>
            </div>
        </div>
    );
}

Keypad.propTypes = {
    keyNums: PropTypes.arrayOf(PropTypes.string),
    combination: PropTypes.string.isRequired,
};

export default Keypad;
