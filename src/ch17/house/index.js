import React, { useState, useReducer } from "react";

import Button from "../button";

import "./house.scss";

const reducer = (state, action) => {
    switch (action.type) {
        case "off":
            return {
                ...state,
                backgroundColor: "#000",
            };
        case "low":
            return {
                ...state,
                backgroundColor: "#666",
            };
        case "medium":
            return {
                ...state,
                backgroundColor: "#ccc",
            };
        case "high":
            return {
                ...state,
                backgroundColor: "#fff",
            };
        default:
            break;
    }
};

function HooksHouse() {
    let [kitchen, setKitchen] = useState(false);
    let [bathroom, setBathroom] = useState(false);
    let [livingRoom, setLivingRoom] = useState(false);
    let [bedroom, setBedroom] = useState(false);

    return (
        <div className="house">
            <div
                className="room kitchen"
                style={{ backgroundColor: kitchen ? "#ff0" : "#fff" }}
            >
                <Button variant="primary" onAction={() => setKitchen(!kitchen)}>
                    Kitchen
                </Button>
            </div>
            <div
                className="room bathroom"
                style={{ backgroundColor: bathroom ? "#ff0" : "#fff" }}
            >
                <Button
                    variant="primary"
                    onAction={() => setBathroom(!bathroom)}
                >
                    Bathroom
                </Button>
            </div>
            <div
                className="room living-room"
                style={{ backgroundColor: livingRoom ? "#ff0" : "#fff" }}
            >
                <Button
                    variant="primary"
                    onAction={() => setLivingRoom(!livingRoom)}
                >
                    Living Room
                </Button>
            </div>
            <div
                className="room bedroom"
                style={{ backgroundColor: bedroom ? "#ff0" : "#fff" }}
            >
                <Button variant="primary" onAction={() => setBedroom(!bedroom)}>
                    Bedroom
                </Button>
            </div>
        </div>
    );
}

export class StateHouse extends React.Component {
    state = {
        rooms: {
            kitchen: true,
            bathroom: false,
            livingRoom: true,
            bedroom: false,
        },
        // roomComponents: null,
    };

    handleClick = (e) => {
        console.log(e.nativeEvent);
        this.setState((state) => {
            return { rooms: { ...state.rooms } };
        });
    };

    render() {
        return (
            <div className="house">
                {Object.keys(this.state.rooms).map((key, i) => (
                    <Room
                        key={key + i}
                        roomName={key}
                        lightSwitch={this.state.rooms[key]}
                        onAction={this.handleClick}
                    />
                ))}
            </div>
        );
    }
}

function Room({ roomName, lightSwitch, onAction }) {
    const [light, setLight] = useState(lightSwitch);
    return (
        <div
            className="room"
            style={{ backgroundColor: light ? "#ff0" : "#fff" }}
        >
            <Button onAction={() => setLight(!light)} variant="primary">
                {roomName}
            </Button>
        </div>
    );
}

export function MultiRoom() {
    const lightStates = ["off", "low", "medium", "high"];
    const [lightIndex, setLightIndex] = useState(0);
    const [style, dispatch] = useReducer(reducer, { backgroundColor: "#000" });

    const handleLightSwitch = (e) => {
        e.preventDefault();
        setLightIndex(i => {
            return (i + 1) % 4;
        });
        dispatch({
            type: lightStates[lightIndex],
        });
    };

    const handleOff = (e) => {
        e.preventDefault();
        setLightIndex(0);
        dispatch({
            type: "off",
        });
    };

    return (
        <div className="room container d-flex justify-content-around" style={style}>
            <Button variant="primary" onAction={handleLightSwitch}>
                Light
            </Button>
            <Button variant="danger" onAction={handleOff}>
                OFF
            </Button>
        </div>
    );
}

export default HooksHouse;
