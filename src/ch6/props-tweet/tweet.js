import React from "react";
import moment from "moment";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet, faReply, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import "./tweet.css";

function Tweet(props) {
    const { tweet } = props;
    return (
        <>
            <div className="tweet">
                <Avatar hash={tweet.gravatar} />
                <div className="content">
                    <User user={tweet.user} />
                    <Time time={tweet.timeStamp} />
                    <Message text={tweet.message} />
                    <Buttons state={tweet.buttonState} />
                </div>
            </div>
        </>
    );
}

export const testTweet = {
    message: "This is a test boiiii",
    gravatar: "abc",
    user: {
        username: "jeff mann",
        handle: "jwmann22",
    },
    buttonState: {
        likes: 10,
        retweets: 200,
    },
    timeStamp: "2020-05-17 14:00:00",
};

function Message({ text }) {
    return <div className="message">{text}</div>;
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return <img src={url} className="avatar" alt="avatar" />;
}

function Buttons(props) {
    const { state } = props;

    const Count = ({ count, name }) => {
        if (count > 0) return <span className={name}>{count}</span>;
        else return null;
    };

    const ReplyButton = () => <FontAwesomeIcon icon={faReply} />;
    const LikeButton = ({ count }) => (
        <span className="like-button">
            <i className="fa fa-heart"></i>
            <FontAwesomeIcon icon={faHeart} />
            {/* {count > 0 && <span className="like-count">{count}</span>} */}
            <Count count={count} name="like-count" />
        </span>
    );
    const RetweetButton = ({ count }) => (
        <span className="retweet-button">
            {/* <i className="fa fa-retweet"></i> */}
            <FontAwesomeIcon icon={faRetweet} />
            {/* {count > 0 && <span className="retweet-count">{count}</span>} */}
            <Count count={count} name="retweet-count" />
        </span>
    );
    const MoreOptionsButton = () => (
        // <i className="fa fa-ellipsis-h more-options-button"></i>
        <FontAwesomeIcon icon={faEllipsisH} />
    );

    return (
        <div className="buttons">
            <ReplyButton />
            <LikeButton count={state.likes} />
            <RetweetButton count={state.retweets} />
            <MoreOptionsButton />
        </div>
    );
}

function User({ user }) {
    const { username, handle } = user;
    return (
        <span className="user">
            <span className="username">{username}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

const Time = ({ time }) => {
    const timeStr = moment(time).fromNow();
    return <span className="time">{timeStr}</span>;
};

export default Tweet;
