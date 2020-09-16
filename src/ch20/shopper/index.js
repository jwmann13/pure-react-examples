import React, { useState } from "react";
import Header from "../nav";
import ItemPage from "../itempage";
import CartPage from "../cartpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { items } from "../../dummydata";

import "./shopper.scss";

const summarizeCart = (cart) => {
    const group = cart.reduce((summary, item) => {
        summary[item.id] = summary[item.id] || {
            ...item,
            count: 0,
        };
        summary[item.id].count++;
        return summary;
    }, {});
    return Object.values(group);
};

const cartTotal = (cart) => {
    let sum = 0;
    cart.forEach((item) => (sum += item.price));
    return sum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function Shopper() {
    const [activeTab, setActiveTab] = useState("items");
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeItem = (item) => {
        let index = cart.findIndex((i) => i.id === item.id);
        if (index >= 0) {
            setCart((cart) => {
                const copy = [...cart];
                copy.splice(index, 1);
                return copy;
            });
        }
    };

    return (
        <div className="container">
            <Header
                navItems={[
                    { id: 1, name: "items" },
                    { id: 2, name: "cart" },
                ]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                light
            >
                <div className="ml-auto">
                    <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} onClick={() => setActiveTab("cart")}/> ({cart.length}){" "}
                    <span>${cartTotal(cart)}</span>
                </div>
            </Header>
            <main className="content">
                <Content
                    tab={activeTab}
                    onAddToCart={addToCart}
                    onRemoveItem={removeItem}
                    setTab={setActiveTab}
                    cart={summarizeCart(cart)}
                />
            </main>
        </div>
    );
}

const Content = ({ tab, onAddToCart, onRemoveItem, setTab, cart }) => {
    switch (tab) {
        default:
        case "items":
            return <ItemPage items={items} onAddToCart={onAddToCart} />;
        case "cart":
            return (
                <CartPage
                    cart={cart}
                    setTab={setTab}
                    onAddItem={onAddToCart}
                    onRemoveItem={onRemoveItem}
                />
            );
    }
};

export default Shopper;
