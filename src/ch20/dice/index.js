import React from "react";

import Button from "../button";

import "./index.scss";

function Dice(props) {
    return (
        <div className="card">
            <div className="card-body">
                <CountingParent />
                <CountingParent />
                <CountingParent />
            </div>
        </div>
    );
}

const Random = ({ range }) => {
    let val = Math.floor(range * Math.random());
    return <div>{val}</div>;
};

class CountingParent extends React.Component {
    state = {
        actionCount: 0,
    };

    countAction = (e) => {
        this.setState((state) => {
            return {
                actionCount: state.actionCount + 1,
            };
        });
    };

    resetAction = (e) => {
        this.setState({
            actionCount: 0,
        });
    };

    render() {
        return (
            <div>
                <Button onAction={this.countAction}>Roll</Button>
                <Button onAction={this.resetAction}>Reset</Button>
                <Random range={6} />
                {this.state.actionCount}
            </div>
        );
    }
}

export default Dice;
