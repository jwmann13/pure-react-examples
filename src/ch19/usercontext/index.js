import React, { Component } from "react";
import "./usercontext.scss";

const UserAvatar = ({ user, size }) => (
    <img
        className={`user-avatar m-auto m-md-0 ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
        style={{ borderRadius: "50%" }}
    />
);

const UserStats = ({ user }) => (
    <div className="user-stats card">
        <div className="d-flex flex-column flex-md-row pb-0 pt-4 px-4">
            <UserAvatar user={user} />
            <div className="align-self-center m-0 ml-md-3">{user.name}</div>
        </div>
        <div className="stats text-center text-md-left pb-4 pt-0 px-1 px-md-4 m-2">
            <div>{user.followers} Followers</div>
            <div>Following {user.following}</div>
        </div>
    </div>
);

const Nav = ({ children }) => (
    <nav className="row d-flex justify-content-end py-4">{children}</nav>
);

const Content = () => (
    <div className="content col-6 col-md-8 col-lg-9 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fugit
        accusantium veniam fuga similique praesentium error suscipit eveniet,
        voluptatibus nulla enim alias commodi ratione laboriosam culpa earum!
        Quisquam, vero beatae!
    </div>
);

const Sidebar = ({ children }) => (
    <div className="sidebar col-6 col-md-4 col-lg-3">{children}</div>
);

const Body = ({ sidebar, content }) => (
    <div className="body row">
        <Sidebar>{sidebar}</Sidebar>
        {content}
    </div>
);

class UserApp extends Component {
    state = {
        user: {
            avatar:
                "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
            name: "Guy Mann",
            followers: 0,
            following: 0,
        },
    };

    render() {
        const { user } = this.state;
        return (
            <div className="container">
                <Nav>
                    <UserAvatar user={user} size="small" />
                </Nav>
                <Body
                    sidebar={<UserStats user={user} />}
                    content={<Content />}
                ></Body>
            </div>
        );
    }
}

export default UserApp;
