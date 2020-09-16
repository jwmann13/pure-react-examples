import React, { useState, useEffect } from "react";

function LogEffect() {
    const [text, setText] = useState("");

    useEffect(() => console.log("latest value: ", text));
    return (
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
        />
    );
}

export default LogEffect;
