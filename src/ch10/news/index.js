import React from "react";

import Time from "../../time/time";
import { Header } from "../nav/";
import "./index.scss";

import { navItems } from "../../dummydata";

function News({ stories }) {
    const siteInfo = {
        name: "Hacker News",
        href: "/",
        navItems
    };
    return (
        <>
            <Header navItems={navItems} siteInfo={siteInfo}/>
            <table className="table">
                <colgroup>
                    <col width="1%" />
                    <col width="100%" />
                </colgroup>
                <Stories stories={stories} />
            </table>
        </>
    );
}

// const Nav = ({ navItems }) => {
//     const itemList = navItems.map((item, i) => <NavItem item={item} key={i} />);
//     return (
//         <div className="navbar-collapse">
//             <ul className="navbar-nav mr-auto">{itemList}</ul>
//         </div>
//     );
// };

// const NavItem = ({ item }) => {
//     return (
//         <>
//             <li className="nav-item">{item}</li>
//         </>
//     );
// };

const Stories = ({ stories }) => {
    const articles = stories.map((s) => <Article article={s} key={s.id} />);

    return <tbody>{articles}</tbody>;
};

const Article = ({ article }) => {
    const { id, title, source, karma, user, commentCount, timeStamp } = article;
    const URLhostname = new URL(source).hostname;
    return (
        <>
            <tr className="article-top">
                <th
                    scope="row"
                    align="right"
                    valign="middle"
                    rowSpan="2"
                    className="count text-muted"
                >
                    {id}.
                </th>
                <td className="article-title">
                    {title} <span className="text-muted">({URLhostname})</span>
                </td>
            </tr>
            <tr className="article-bottom text-muted">
                <td className="subtext">
                    <span className="points">{karma} points</span>
                    {" by "}
                    <a className="user" href="/">
                        {user}
                    </a>
                    {" | "}
                    <span className="comments">{commentCount} comments</span>
                    {" | "}
                    <Time time={timeStamp} />
                </td>
            </tr>
            {/* <tr style={{ height: "12px" }}></tr> */}
        </>
    );
};

export default News;
