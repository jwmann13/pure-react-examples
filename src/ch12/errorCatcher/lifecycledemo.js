import React from "react";

class LifeCycleDemo extends React.Component {
    state = { counter: 0 };

    constructor(props) {
        super(props);
        console.log("[constructor]");
        console.log("State already set", this.state);
    }

    componentDidMount() {
        console.log("[componentDidMount]", "Mounted");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("[getDerivedStateFromProps]");
        console.log("   Next Props: ", nextProps);
        console.log("   Prev State: ", prevState);
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[shouldComponentUpdate]", "Deciding to update");
        return true;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log("[getSnapshotBeforeUpdate]", "About to update...");
        return `Time is ${Date.now()}`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[componentDidUpdate]", "Updated");
        console.log("   snapshot:", snapshot);
    }

    componentWillUnmount() {
        console.log("[componentWillUnmount]", "Goodbye Cruel World");
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    causeErrorNextRender = () => {
        this.setState({ causeError: true });
    };

    render() {
        console.log("[render]");
        if (this.state.causeError) throw new Error("oh no!!!");

        return (
            <div>
                <span>Counter: {this.state.counter}</span>{" "}
                <button onClick={this.handleClick}>Click to increment</button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
                </button>
            </div>
        );
    }
}

export default LifeCycleDemo;