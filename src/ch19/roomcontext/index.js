import React, { createContext, useState, useContext } from "react";
import Button from "../button";

import "./room.scss"

const RoomContext = createContext();

export function RoomStore({ children }) {
    const [isLit, setIsLit] = useState(false);
    const toggleLight = () => {
        setIsLit(!isLit);
    };

    return (
        <RoomContext.Provider value={{ isLit: isLit, onToggleLight: toggleLight }}>
            {children}
        </RoomContext.Provider>
    );
}

const Room = () => {
    const { isLit, onToggleLight } = useContext(RoomContext);

    return <div className={`container d-flex justify-content-center flex-column room ${isLit ? "lit" : "dark"}`}>
        The Room is {isLit ? "lit" : "dark"}.
        <br />
        <Button variant="primary" onAction={onToggleLight}>Flip</Button>

    </div>;
};

export default Room;
