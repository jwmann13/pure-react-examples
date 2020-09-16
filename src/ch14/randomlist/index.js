import React, { useState } from "react";
import Button from "../button";

function RandomList(props) {
    const [items, setItems] = useState([]);

    const addItem = () => {
        console.log(items);
        setItems([
            ...items,
            { id: items.length, value: Math.floor(Math.random() * 16) },
        ]);
    };

    const updateItem = (e, id) => {
        items[id].value = parseInt(e.target.value, 10);
        setItems([...items]);
    }

    const handleSubmit = (e) => {
        console.log(items);
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <Button onAction={addItem} variant="dark">
                        Add a new Number
                    </Button>
                    <ul className="list-group">
                        {items.map((item) => (
                            <li key={item.id} className="list-group-item">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        value={item.value}
                                        onChange={(e) => updateItem(e, item.id)}
                                    />
                                </form>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RandomList;
