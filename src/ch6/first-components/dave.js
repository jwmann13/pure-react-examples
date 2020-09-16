import React from "react";

function Dave(props) {
    const firstName = "Dave";
    const lastName = "Smith";

    return (
        <Person className="person" name={firstName + " " + lastName} age={33} />
    );
}

function Person(props) {
    return (
        <div className={props.className}>
            Hello {props.name}. How does it feel to be {props.age} years old?
        </div>
    );
}

export default Dave;
