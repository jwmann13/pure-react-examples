import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function Trello({ trello }) {
    const { title, items } = trello;
    return (
        <div className="card bg-light p-0 col-4">
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
                <span className="more-icon">
                    <FontAwesomeIcon icon={faEllipsisH} />
                </span>
            </div>
            <TrelloList items={items} />
            <div className="card-body">
                <div className="card-text">Add a card...</div>
            </div>
        </div>
    );
}
Trello.propTypes = {
    trello: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        items: PropTypes.array,
    }),
};

const TrelloList = ({ items }) => {
    const itemList = items.map((item, i) => <TrelloItem item={item} key={i} />);
    return <ul className="list-group trello-list m-auto">{itemList}</ul>;
};

const TrelloItem = ({ item }) => {
    return <li className="list-group-item">{item}</li>;
};

export default Trello;
