import React from "react";
import PropTypes from "prop-types";

export default function Button({
    children,
    onAction,
    className,
    size,
    variant,
    style,
    ...props
}) {
    let classStr = "btn";
    switch (size) {
        case "large":
            classStr += " btn-lg";
            break;
        case "medium":
            classStr += " btn-md";
            break;
        case "small":
            classStr += " btn-sm";
            break;

        default:
            break;
    }

    switch (variant) {
        case "default":
            classStr += " btn-default";
            break;

        case "primary":
            classStr += " btn-primary";
            break;

        case "secondary":
            classStr += " btn-secondary";
            break;

        case "dark":
            classStr += " btn-dark";
            break;

        case "light":
            classStr += " btn-light";
            break;

        case "danger":
            classStr += " btn-danger";
            break;

        default:
            break;
    }

    return (
        <button
            type="button"
            style={style}
            className={classStr + (className ? " " + className : "")}
            onClick={onAction}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.any,
    onAction: PropTypes.func,
    size: PropTypes.oneOf(["large", "medium", "small"]),
    style: PropTypes.object,
    variant: PropTypes.oneOf([
        "default",
        "primary",
        "secondary",
        "danger",
        "light",
        "dark",
    ]),
};

export function LgButton({ children, ...props }) {
    return (
        <Button size="large" {...props}>
            {children}
        </Button>
    );
}

export function MdButton({ children, ...props }) {
    return (
        <Button size="medium" {...props}>
            {children}
        </Button>
    );
}

export function SmButton({ children, ...props }) {
    return (
        <Button size="small" {...props}>
            {children}
        </Button>
    );
}
