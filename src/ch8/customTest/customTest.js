import React from "react";

function customValidator(props, propName, componentName) {
    if (props[propName].length !== 3) {
        return new Error(
            "Invalid Prop '" + propName + "' supplied to '" + componentName + "'. Length is not 3!"
        );
    }
}

function CustomTest(props) {
    const { myCustomProp } = props;
    return <div>
        {myCustomProp}
    </div>;
}

CustomTest.propTypes = {
    myCustomProp: customValidator
}

export default CustomTest;
