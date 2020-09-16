import React, { } from 'react';
import { UserContext } from "../usercontext/refactor";

function withUser(Component) {
    return function ConnectedComponent(props) {
        return (
            <UserContext.Consumer >
                {user => <Component {...props} user={user} />}
            </UserContext.Consumer>
        );
    }
}

export default withUser;