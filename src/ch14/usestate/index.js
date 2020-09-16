import React, { useState } from "react";

class OneTimeButtonState extends React.Component {
    state = {
        clicked: false,
    };

    handleClick = () => {
        this.props.onClick();

        this.setState({ clicked: true });
    };

    render() {
        return (
            <button
                className="btn btn-lg btn-primary"
                onClick={this.handleClick}
                disabled={this.state.clicked}
            >
                Click me only once
            </button>
        );
    }
}

export function OneTimeButtonHooks({ onClick }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        onClick();
        setClicked(true);
    };

    return (
        <button
            className="btn btn-lg btn-primary"
            onClick={handleClick}
            disabled={clicked}
        >
            Click me only once
        </button>
    );
}

export default OneTimeButtonState;
