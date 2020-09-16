import React, { useRef, useState, useEffect } from "react";
import Button from "../button";

function FocusRef({ initValue }) {
    const inputRef = useRef();
    const [value, setValue] = useState(initValue);

    useEffect(() => {
        console.log("render");
        inputRef.current.focus();
        return () => console.log("unmounting...");
    }, []);
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={inputRef}
        />
    );
}

export function ClearContainer() {
    const [inputs, setInputs] = useState(["stuffff"]);

    const handleClear = () => setInputs([]);

    return (
        <div>
            {inputs.map((input, i) => (
                <FocusRef key={input + i} initValue={input} />
            ))}
            <Button variant="primary" onAction={handleClear}>Clear</Button>
        </div>
    );
}

export default FocusRef;
