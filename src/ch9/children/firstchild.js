import React from 'react';
import PropTypes from 'prop-types';

export function FirstChildOnly({ children }) {
    let render = React.Children.toArray(children);
    return (
        <div>
            {render[0]}
        </div>
    );
}

export function LastChildOnly({ children }) {
    let render = React.Children.toArray(children);
    return (
        <div>
            {render[render.length-1]}
        </div>
    );
}

export function Head({ children, number }) {
    let render = React.Children.map(children, (child, i) => i < number ? child : null);
    return (
        <div>
            {render}
        </div>
    );
}
Head.propTypes = {
    children: PropTypes.node.isRequired,
    number: PropTypes.number.isRequired
}

export function Tail({ children, number }) {
    let render = React.Children.map(children, (child, i) => i >= children.length - number ? child : null);
    console.log(render)
    return (
        <div>
            {render}
        </div>
    );
}
Tail.propTypes = {
    children: PropTypes.node.isRequired,
    number: PropTypes.number.isRequired
}