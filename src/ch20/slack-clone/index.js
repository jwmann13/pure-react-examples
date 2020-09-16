import React, { useReducer, useRef, useState } from "react";
import Time from "../time/time";

import "./slack-clone.scss";

import { slackPages } from "../../dummydata";

const reducer = (state, action) => {
    switch (action.type) {
        case "new":
            // console.log(state);
            return [action.message, ...state];
        default:
            break;
    }
};

function Slack() {
    const [activeTab, setActiveTab] = useState("general");
    const [messages, dispatch] = useReducer(reducer, slackPages);
    const messageInput = useRef();

    const ChannelPages = [...new Set(messages.map((item) => item.page))]
        .map((page, id) => ({ id, page }))
        .reduce(
            (unique, item) =>
                unique.includes(item) ? unique : [...unique, item],
            [],
        );
    const UserPages = [...new Set(messages.map((item) => item.user))]
        .map((page, id) => ({ id, page }))
        .reduce(
            (unique, item) =>
                unique.includes(item) ? unique : [...unique, item],
            [],
        );

    console.log(ChannelPages, UserPages);

    const currentPageMessages = messages.filter(
        (msg) => msg.page === activeTab || msg.user === activeTab,
    );

    const onSendMessage = (e) => {
        e.preventDefault();
        dispatch({
            type: "new",
            message: {
                page: activeTab,
                id: currentPageMessages.length + 1,
                user: "you",
                avatar: "https://www.lorempixel.com/200/200/",
                time: Date.now(),
                text: messageInput.current.value,
            },
        });
        messageInput.current.value = "";
    };

    return (
        <div className="row no-gutters">
            <Sidebar>
                <Channels
                    channels={[
                        ...ChannelPages,
                    ]}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
                <People
                    users={[...UserPages]}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </Sidebar>
            <Content activeTab={activeTab}>
                <form className="form-inline" onSubmit={onSendMessage}>
                    <div className="form-group m-0 w-100 mb-2">
                        <input
                            className="form-control col-9 mr-2"
                            type="text"
                            ref={messageInput}
                        />
                        <input
                            type="submit"
                            value="Send"
                            className="btn btn-primary col-2"
                        />
                    </div>
                </form>
                {currentPageMessages.map((msg) => (
                    <Message key={msg.id} message={msg} />
                ))}
            </Content>
        </div>
    );
}

const Content = ({ children }) => {
    return (
        <main className="content col d-flex flex-column-reverse">
            {children}
        </main>
    );
};

const Sidebar = ({ children }) => {
    return <div className="sidebar p-3 col-md-3">{children}</div>;
};

const Message = ({ message }) => {
    const { user, avatar, time, text } = message;
    return (
        <div className="message d-flex flex-row mb-1">
            <img src={avatar} alt={`${user} avatar`} className="mr-2" />
            <div className="message-content">
                <div className="message-header clearfix">
                    <h5 className="username text-capitalize float-left font-weight-bold">
                        {user}
                    </h5>
                    <Time
                        time={time}
                        format="ddd MMM DD YYYY hh:mm"
                        className="text-muted ml-4"
                    />
                </div>
                <p className="text lead">{text}</p>
            </div>
        </div>
    );
};

const Channels = ({ channels, activeTab, onTabChange }) => (
    <ul className="channels nav flex-column">
        <h6 className="text-uppercase">channels</h6>
        {channels.map((ch) => (
            <li
                className={`nav-item ${activeTab === ch.page ? "active" : ""}`}
                onClick={() => onTabChange(ch.page)}
                key={ch.id}
            >
                {ch.page}
            </li>
        ))}
    </ul>
);

const People = ({ users, activeTab, onTabChange }) => (
    <ul className="people nav flex-column">
        <h6 className="text-uppercase">People</h6>
        {users.map((u) => (
            <li
                className={`nav-item text-capitalize ${
                    activeTab === u.page ? "active" : ""
                }`}
                onClick={() => onTabChange(u.page)}
                key={u.id}
            >
                {u.page}
            </li>
        ))}
    </ul>
);

export default Slack;
