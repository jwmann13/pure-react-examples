import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faRetweet,
    faReply,
    faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import './tweet.css';

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
Tweet.propTypes = {
    tweet: PropTypes.shape({
        message: PropTypes.string,
        gravatar: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired,
        buttonState: PropTypes.object.isRequired,
        timeStamp: PropTypes.string.isRequired,
    }),
};

function Message({ text }) {
    return <div className="message">{text}</div>;
}
Message.propTypes = {
    text: PropTypes.string,
};

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return <img src={url} className="avatar" alt="avatar" />;
}
Avatar.propTypes = {
    hash: PropTypes.string.isRequired,
};

function Buttons(props) {
    const { state } = props;

    const Count = ({ count, name }) => {
        if (count > 0) return <span className={name}>{count}</span>;
        else return null;
    };

    const ReplyButton = () => (
        <span className="reply-button">
            <FontAwesomeIcon icon={faReply} />
        </span>
    );

    const LikeButton = ({ count }) => (
        <span className="like-button">
            {/* <i className="fa fa-heart"></i> */}
            <FontAwesomeIcon icon={faHeart} />
            {/* {count > 0 && <span className="like-count">{count}</span>} */}
            <Count count={count} name="like-count" />
        </span>
    );
    LikeButton.propTypes = {
        count: PropTypes.number,
    };

    const RetweetButton = ({ count }) => (
        <span className="retweet-button">
            {/* <i className="fa fa-retweet"></i> */}
            <FontAwesomeIcon icon={faRetweet} />
            {/* {count > 0 && <span className="retweet-count">{count}</span>} */}
            <Count count={count} name="retweet-count" />
        </span>
    );
    RetweetButton.propTypes = {
        count: PropTypes.number,
    };

    const MoreOptionsButton = () => (
        // <i className="fa fa-ellipsis-h more-options-button"></i>
        <span className="more-options-button">
            <FontAwesomeIcon icon={faEllipsisH} />
        </span>
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
Buttons.propTypes = {
    state: PropTypes.shape({
        likes: PropTypes.number,
        retweets: PropTypes.number,
    }),
};

function User({ user }) {
    const { username, handle } = user;
    return (
        <span className="user">
            <span className="username">{username}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}
User.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired,
    }).isRequired,
};

const Time = ({ time }) => {
    const timeStr = moment(time).fromNow();
    return <span className="time">{timeStr}</span>;
};
Time.propTypes = {
    time: PropTypes.string,
};

export default Tweet;
