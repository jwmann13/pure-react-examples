import React, { useState } from "react";

const MultiCounter = () => {
    const [counts, setCounts] = useState({
        countA: 0,
        countB: 0,
    });

    const incrA = () => {
        setCounts({
            ...counts,
            countA: counts.countA + 1,
        });
    };

    const incrB = () => {
        setCounts({
            ...counts,
            countB: counts.countB + 1,
        });
    };

    const badIncrA = () => {
        setCounts({
            countA: counts.countA + 1,
        });
    };

    return (
        <div>
            <div>A: {counts.countA}</div> <div>B: {counts.countB}</div>{" "}
            <button onClick={incrA}>Increment A</button>
            <button onClick={incrB}>Increment B</button>
            <button onClick={badIncrA}>Increment A Badly</button>
        </div>
    );
};

export default MultiCounter;
