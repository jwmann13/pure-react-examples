import React, { useState, useEffect } from "react";
import Time from "../time/time";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import "./fully-reddit.scss";

function Reddit() {
    const [inputValue, setValue] = useState("reactjs");
    const [subreddit, setSubreddit] = useState(inputValue);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortType, setSortType] = useState("score");
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubreddit(inputValue);
    };

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}.json?sort=new`)
            .then((res) => res.json())
            .then((json) => {
                // console.log("data", json);
                return json.data.children.map((p) => p.data);
            })
            .then((posts) => {
                const sortArray = (type) => {
                    // console.log(posts);
                    const types = {
                        score: "score",
                        created: "created",
                        num_comments: "num_comments",
                    };
                    const sortProperty = types[type];
                    const sorted = [...posts].sort(
                        (a, b) => b[sortProperty] - a[sortProperty],
                    );
                    return sorted;
                };
                setPosts(sortArray(sortType));
                setLoading(false);
            })
            .catch((err) => setError(err));

        return () => setLoading(true);
    }, [subreddit, sortType, setPosts]);

    if (error) {
        throw new Error("Reddit Loading error!");
    }

    return (
        <div className="container-fluid container-md" id="Reddit">
            <h1 className="display-3">/r/{subreddit}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-12 col-md-8 col-lg-9">
                        <input
                            className="form-control"
                            value={inputValue}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                        <select
                            className="custom-select"
                            onChange={(e) => setSortType(e.target.value)}
                        >
                            <option value="score">Score</option>
                            <option value="created">Newest-{">"}Oldest</option>
                            <option value="num_comments">Most Commented</option>
                        </select>
                    </div>
                </div>
            </form>
            {!loading ? (
                <ul className="list-group m-1">
                    {posts.map((p) => (
                        <RedditItem key={p.id} post={p} />
                    ))}
                </ul>
            ) : (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "50vh" }}
                >
                    <div
                        className="spinner-border"
                        role="status"
                        style={{ height: "100px", width: "100px" }}
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
}

const RedditItem = ({ post }) => {
    const {
        id,
        ups,
        downs,
        thumbnail,
        title,
        url,
        created_utc,
        author,
        domain,
        num_comments,
    } = post;

    const [score, setScore] = useState(ups - downs);

    const onUpvote = () => {
        setScore((prevScore) => prevScore + 1);
    };

    const onDownvote = () => {
        setScore((prevScore) => prevScore - 1);
    };

    return (
        <li className="reddit-item list-group-item pt-0 px-0 d-flex flex-row">
            <RedditVotes
                score={score}
                onUpvote={onUpvote}
                onDownvote={onDownvote}
            />
            <img
                src={
                    thumbnail === "self" ||
                    thumbnail === "default" ||
                    thumbnail === "unknown" ||
                    thumbnail === "(unknown)"
                        ? "https://via.placeholder.com/140X70/"
                        : thumbnail
                }
                className="reddit-thumbnail float-left m-0 mr-md-2 pb-2 order-0 order-md-2"
                alt="reddit thumbnail"
            />
            <div className="reddit-info d-flex flex-column justify-content-center order-3">
                <a href={url} className="reddit-title" key={id}>
                    {title}
                </a>
                <span className="source text-muted">({domain})</span>
                <div className="reddit-submission text-muted">
                    Submitted <Time time={created_utc} utc /> by{" "}
                    <span className="text-secondary">{author}</span>
                </div>
                <RedditActions comments={num_comments} url={url} />
            </div>
        </li>
    );
};

const RedditActions = ({ comments, url }) => (
    <div className="reddit-actions d-flex flex-row justify-content-between">
        <a className="comments" href={url}>
            {comments} Comments
        </a>
        <div>Share</div>
        <div>Save</div>
        <div>Hide</div>
        <div>Report</div>
        <div>Pocket</div>
    </div>
);

const RedditVotes = ({ score, onUpvote, onDownvote }) => (
    <div className="reddit-votes d-flex flex-column align-items-center justify-content-center order-1">
        <Button className="upvote p-0" onAction={() => onUpvote()}>
            <FontAwesomeIcon icon={faArrowUp} />
        </Button>
        <div className="reddit-score">{score}</div>
        <Button className="downvote p-0" onAction={() => onDownvote()}>
            <FontAwesomeIcon icon={faArrowDown} />
        </Button>
    </div>
);

export default Reddit;
