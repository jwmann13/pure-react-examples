import React, { useRef, useReducer } from "react";
import Button from "../button";

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, { id: state.length, name: action.name }];
        case "remove":
            return state.filter((_, index) => index !== action.index);
        case "clear":
            return [];
        default:
            return state;
    }
};

function ShoppingList() {
    const inputRef = useRef();
    const [items, dispatch] = useReducer(reducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "add",
            name: inputRef.current.value,
        });
        inputRef.current.value = "";
    };

    const handleClear = (e) => {
        e.preventDefault();
        dispatch({
            type: "clear",
        });
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <form className="form-inline" onSubmit={handleSubmit}>
                    <input type="text" ref={inputRef} />
                </form>
                <button className="btn btn-danger" onClick={handleClear}>CLEAR</button>
            </div>
            <ul className="list-group-flush">
                {items.map((item, i) => (
                    <li
                        className="list-group-item d-flex flex-row justify-content-between"
                        key={item.id}
                    >
                        {item.name}
                        <Button
                            variant="danger"
                            onAction={() =>
                                dispatch({ type: "remove", index: i })
                            }
                            className=""
                        >
                            X
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
