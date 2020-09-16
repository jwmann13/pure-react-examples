import React from "react";

function Table(props) {
    return (
        <table>
            <tbody>
            {props.children}
            </tbody>
        </table>
    );
}

export function Data(props) {
    return (
        <>
            <td>Space</td>
            <td>Space</td>
            <td>Space</td>
        </>
    );
}

export default Table;
