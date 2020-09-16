import React, { useState, useRef } from "react";

function HelloInput(props) {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
    });

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <form action="">
                <div className="form-group">
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="firstName"
                            id="firstName"
                        />
                    </label>
                    <label htmlFor="lastName" className="ml-1">
                        Last Name:
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="lastName"
                            id="lastName"
                        />
                    </label>
                </div>
            </form>
            <div className="card">
                <div className="card-body">
                    <h4 className="display-3">
                        Hello, This is {info.firstName} {info.lastName}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export function HelloInputUncontrolled() {
    const [display, setDisplay] = useState("");
    const firstName = useRef();
    const lastName = useRef();

    const showInfo = () => {
        setDisplay(`${firstName.current.value} ${lastName.current.value}`);
        // alert(`${firstName.current.value} ${lastName.current.value}`)
    };

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstName"
                            ref={firstName}
                        />
                    </label>
                    <label htmlFor="lastName" className="ml-1">
                        Last Name:
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="lastName"
                            ref={lastName}
                        />
                    </label>
                    <input
                        type="button"
                        className="btn btn-primary"
                        onClick={showInfo}
                        value="Click it Bitch"
                    />
                </div>
            </form>
            <div className="card">
                <div className="card-body">
                    <h4 className="display-3">Hello, This is {display}</h4>
                </div>
            </div>
        </div>
    );
}

export default HelloInput;
