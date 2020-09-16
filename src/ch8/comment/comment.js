import React from "react";
import PropTypes from "prop-types";
import "./comment.css"

export default function Comment({ author, message, likes }) {
    return (
        <div className="comment">
            <div className="author">{author}</div>
            <div className="message">{message}</div>
            <div className="likes">{likes > 0 ? likes : "No"} Likes</div>
        </div>
    );
}

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number
};