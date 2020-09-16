import React, { createContext } from "react";
import withUser from "../withuser";
import UserStore from "../userstore";
import "./usercontext.scss";

export const UserContext = createContext({
    avatar: "https://www.gravatar.com/avatar/",
    name: "Guy Mann",
    followers: 0,
    following: 0,
});

const UserAvatar = withUser(({ size, user }) => (
    <img
        className={`user-avatar m-auto m-md-0 ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
        style={{ borderRadius: "50%" }}
    ></img>
));

const UserStats = withUser(({ user }) => (
    <div className="user-stats card">
        <div className="d-flex flex-column flex-md-row pb-0 pt-4 px-4">
            <UserAvatar user={user} />
            <div className="align-self-center m-0 ml-md-3">{user.name}</div>
        </div>
        <div className="stats text-center text-md-left pb-4 pt-0 px-1 px-md-4 m-2">
            <div>
                {user.followers > 1000
                    ? (user.followers / 1000).toFixed(1).toString() + "K"
                    : user.followers}{" "}
                Followers
            </div>
            <div>
                Following{" "}
                {user.following > 1000
                    ? (user.following / 1000).toFixed(1).toString() + "K"
                    : user.following}
            </div>
        </div>
    </div>
));

const Nav = ({ children }) => (
    <nav className="row d-flex justify-content-end py-4">{children}</nav>
);

const Content = withUser(({ user }) => (
    <div className="col">
        {user.name ? <h4 className="">{user.name}'s Profile</h4> : ""}
        <div className="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fugit
            accusantium veniam fuga similique praesentium error suscipit
            eveniet, voluptatibus nulla enim alias commodi ratione laboriosam
            culpa earum! Quisquam, vero beatae!
        </div>
    </div>
));

const Sidebar = ({ children }) => (
    <div className="sidebar col-6 col-md-4 col-lg-3">{children}</div>
);

const Body = ({ sidebar, content }) => (
    <div className="body row">
        <Sidebar>{sidebar}</Sidebar>
        {content}
    </div>
);

const UserApp = () => {
    return (
        <div className="container">
            <UserStore>
                <Nav>
                    <UserAvatar size="small" />
                </Nav>
                <Body sidebar={<UserStats />} content={<Content />}></Body>
            </UserStore>
        </div>
    );
};

export default UserApp;
