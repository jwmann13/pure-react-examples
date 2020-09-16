import React from 'react';

function Parent(props) {
    const handleAction = (event) => console.log("Child Did: ", event)
    return (
        <div>
            <Child onAction={handleAction} />
        </div>
    );
}

function Child(props) {
    const { onAction } = props;
    return (
        <button onClick={onAction}>Click me</button>
    );
}

export default Parent;