import React, { useContext } from "react";
import { UserContext } from "../usercontext/refactor";

function UserStore({ children }) {
    let user = useContext(UserContext);
    user = {
        avatar:
            "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
        name: "Dangerous Person",
        followers: 20001,
        following: 40,
    }
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserStore;
