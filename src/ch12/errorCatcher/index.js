import React, { Component } from "react";

class ErrorCatcher extends Component {
    state = { error: null };

    componentDidCatch(error, info) {
        console.log("[componentDidCatch]", error);
        this.setState({ error: info.componentStack });
    }

    render() {
        if (this.state.error) {
            return <div>An Error Ocurred: {this.state.error}</div>;
        }
        return this.props.children;
    }
}

export default ErrorCatcher;
