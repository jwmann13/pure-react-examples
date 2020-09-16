import React from "react";
import "./tweet.css";

function Tweet(props) {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <User />
                <Time />
                <Message />
                <Buttons />
            </div>
        </div>
    );
}

function Message(props) {
    return (
        <div className="message">This contains less than 280 characters</div>
    );
}

function Avatar(props) {
    return (
        <img
            src="https://www.gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar"
        />
    );
}

function Buttons(props) {
    const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;
    const LikeButton = () => <i className="fa fa-heart like-button"></i>;
    const RetweetButton = () => (
        <i className="fa fa-retweet retweet-button"></i>
    );
    const MoreOptionsButton = () => (
        <i className="fa fa-ellipsis-h more-options-button"></i>
    );

    return (
        <div className="buttons">
            <ReplyButton />
            <LikeButton />
            <RetweetButton />
            <MoreOptionsButton />
        </div>
    );
}

function User(props) {
    return (
        <span className="user">
            <span className="username">Username</span>
            <span className="handle">@userhandle</span>
        </span>
    );
}

const Time = () => <span className="time">3h ago</span>;

export default Tweet;
