import React from "react";
import PropTypes from "prop-types";
import Button from "../button";

import "./itempage.scss";

function ItemPage({ items, onAddToCart }) {
    return (
        <ul className="items list-group">
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                >
                    <Button className="item-add-item" variant="secondary" onAction={() => onAddToCart(item)}>
                        Add To Cart
                    </Button>
                </Item>
            ))}
        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const Item = ({ item, children }) => (
    <li className="item list-group-item d-flex flex-row justify-content-between">
        <div className="item-left">
            <div className="item-img" />
            <div className="item-title">{item.name}</div>
            <div className="item-description">{item.description}</div>
        </div>
        <div className="item-right d-flex flex-column align-items-center">
            <div className="item-price">${item.price}</div>
            {children}
        </div>
    </li>
);

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
};

export default ItemPage;
