import React from "react";
import { Item } from "../itempage";
import Button from "../button";

import "./cartpage.scss";

function CartPage({ cart, onAddItem, onRemoveItem, setTab }) {
    return cart.length > 0 ? (
        <ul className="cart-page-items list-group">
            {cart.map((item) => (
                <Item key={item.id} item={item}>
                    <div className="cart-controls">
                        <Button
                            className="cart-add-item"
                            variant="light"
                            onAction={() => onAddItem(item)}
                        >
                            +
                        </Button>
                        <span className="cart-count">{item.count}</span>
                        <Button
                            className="cart-remove-item"
                            variant="light"
                            onAction={() => onRemoveItem(item)}
                        >
                            -
                        </Button>
                    </div>
                </Item>
            ))}
        </ul>
    ) : (
        <div className="empty-cart-notification d-flex flex-column justify-content-center align-items-center">
                <h5>There are no items in your cart</h5>
                <br />
                <p className="return-text text-muted" onClick={() => setTab("items")}>Do you want to return to the shop?</p>
        </div>
    );
}

export default CartPage;
