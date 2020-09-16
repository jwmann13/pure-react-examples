import React, { useState } from "react";

function PizzaForm(props) {
    const [size, setSize] = useState("small");
    const [topping, setTopping] = useState("pepperoni");
    const [glutenFree, setGlutenFree] = useState(false);
    const [specialInstructions, setSpecialInstructions] = useState("");

    const changeSize = (e) => {
        setSize(e.target.value);
    };

    const changeTopping = (e) => {
        setTopping(e.target.value);
    };

    const changeGlutenFree = (e) => {
        console.log(e.target.value);
        setGlutenFree(!glutenFree);
    };

    const changeSpecialInstructions = (e) => {
        setSpecialInstructions(e.target.value)
    }

    const submitAlert = (e) => {
        e.preventDefault();
        alert(`Size: ${size}\nTopping: ${topping}\nGluten Free? ${glutenFree}\nSpecial Instructions: ${specialInstructions}`)
    }

    return (
        <div className="container">
            <h1>Get a pizza</h1>
            <form onSubmit={submitAlert}>
                <fieldset name="size" className="form-group">
                    <legend className="pt-0">Size</legend>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="smallRadio"
                            value="small"
                            checked={size === "small"}
                            onChange={changeSize}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="smallRadio"
                        >
                            Small
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="mediumRadio"
                            value="medium"
                            checked={size === "medium"}
                            onChange={changeSize}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="mediumRadio"
                        >
                            Medium
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="largeRadio"
                            value="large"
                            checked={size === "large"}
                            onChange={changeSize}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="largeRadio"
                        >
                            Large
                        </label>
                    </div>
                </fieldset>
                <div className="form-group">
                    <label htmlFor="toppingSelect">Toppings</label>
                    <select
                        className="custom-select"
                        name="topping"
                        id="toppingSelect"
                        value={topping}
                        onChange={changeTopping}
                    >
                        <option value="cheese">Cheese</option>
                        <option value="pepperoni">Pepperoni</option>
                        <option value="gabbagool">Gabbagool</option>
                        <option value="anchovies">Anchovies</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            name="glutenFree"
                            id="glutenFree"
                            value={glutenFree}
                            onChange={changeGlutenFree}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="glutenFree"
                        >
                            Gluten Free
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="specialInstructions">
                        Special Instructions
                        <textarea
                            name="specialInstructions"
                            id="specialInstructions"
                            className="form-control"
                            value={specialInstructions}
                            onChange={changeSpecialInstructions}
                        ></textarea>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" value="Send Order">Send Order</button>
            </form>
        </div>
    );
}

export default PizzaForm;
