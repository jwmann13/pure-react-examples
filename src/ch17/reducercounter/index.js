import React, { useReducer } from 'react';
import Button from "../button";

function ReducerCounter(props) {
    const [sum, dispatch] = useReducer((state, action) => state + action, 1)
    return (
        <div className="card col-4">
            {sum}
            <Button variant="primary" size="large" onAction={() => dispatch(5)}>Add 1</Button>
        </div>
    );
}

export default ReducerCounter;