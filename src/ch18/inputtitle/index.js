import React, { useState, useEffect } from "react";

function InputTitle(props) {
    const [value, setValue] = useState("");

    useEffect(() => {
        document.title = value;
        document.body.addEventListener("click", handleClick);
        return window.removeEventListener("click", handleClick);
    });

    function handleClick() {
        setValue("seymour buttz")
    };

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default InputTitle;
