import React from 'react';

function HelloWorld(props) {
    let username = undefined;
    return (
        <div>
            {username ? username : "Not Logged In"}
        </div>
    );
}

// function Hello() {
//     return (
//         <span>Hello</span>
//     );
// }

// function World() {
//     return (
//         <span>World</span>
//     );
// }

export default HelloWorld;