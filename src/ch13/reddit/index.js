import React, { Component, useEffect, useState } from "react";
import Button from "../button";
import axios from "axios";

class Reddit extends Component {
    state = { posts: [], loading: true };

    componentDidMount() {
        axios
            .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
            .then((response) => {
                console.log(response);
                const posts = response.data.data.children.map(
                    (obj) => obj.data,
                );
                this.setState({ posts, loading: false });
            })
            .catch((error) => {
                this.setState({ error });
            });
    }

    render() {
        const { posts, loading, error } = this.state;
        if (error) throw new Error("fucked up!");

        if (!loading) {
            return (
                <div className="container">
                    <h1 className="display-1">{`/r/${this.props.subreddit}`}</h1>
                    <ul className="list-group">
                        {posts.map((post) => (
                            <a
                                className="list-group-item list-group-item-action"
                                href={post.url}
                                key={post.id}
                            >
                                {post.title}
                                <Button variant="primary">Something</Button>
                                <Button variant="secondary">Something</Button>
                            </a>
                        ))}
                    </ul>
                </div>
            );
        } else
            return (
                <div
                    className="container d-flex justify-content-center align-items-center"
                    style={{ height: "100vh" }}
                >
                    <div
                        className="spinner-border"
                        role="status"
                        style={{ height: "100px", width: "100px" }}
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
    }
}

export function RedditHooks({ subreddit }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then((res) => res.json())
            .then((json) => {
                console.log("data");
                    setPosts(json.data.children.map((p) => p.data));
                    setLoading(false);
            })
            .catch((err) => setError(err));

        return () => setLoading(true);
    }, [subreddit, setPosts]);

    if (error) {
        throw new Error("Reddit Loading error!");
    }
    return !loading ? (
        <ul className="list-group">
            {posts.map((p) => (
                <a href={p.url} className="list-group-item" key={p.id}>
                    {p.title}
                </a>
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
    );
}

export function RedditSearchable() {
    const [inputValue, setValue] = useState("trees");
    const [subreddit, setSubreddit] = useState(inputValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubreddit(inputValue);
    };

    return (
        <div className="container">
            <h1 className="display-1">/r/{subreddit}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    value={inputValue}
                    onChange={(e) => setValue(e.target.value)}
                ></input>
            </form>
            <RedditHooks subreddit={subreddit} />
        </div>
    );
}

export default Reddit;
