import React from "react";

import { Header } from "../nav";
import Button from "../button";

import "./pins.scss";

const buttonStyle = {
    marginTop: "0.5rem",
    width: "100%",
    border: "none",
    backgroundColor: "#ddd",
    color: "#f00",
};

function Pins({ siteInfo }) {
    const { name, href, leadImg, navItems, pins} = siteInfo;
    let boards = pins.map((board) => (
        <Board key={board.id} board={board} siteName={name} />
    ));
    return (
        <div className="pins container-md">
            <div className="row lead">
                <img className="lead-image" src={leadImg} alt=""/>
            </div>
            <div className="row">
                <Header name={name} href={href} navItems={navItems} light></Header>
            </div>
            <div className="row">{boards}</div>
        </div>
    );
}

const Board = ({ board, siteName }) => {
    let { id, boardName, imgs } = board;
    let boardImgs = imgs.map((img, i) =>
        i < 4 ? <BoardImage key={"img" + i + id}>{img}</BoardImage> : null,
    );
    return (
        <div className="col-md-6 col-lg-4">
            <div className="board card my-2 mr-2">
                <div className="card-body">
                    <h5 className="card-title">{boardName}</h5>
                    <h6 className="card-subtitle text-muted">{siteName}</h6>
                    <div className="board-imgs">{boardImgs}</div>
                    <Button style={buttonStyle}>Follow</Button>
                </div>
            </div>
        </div>
    );
};

const BoardImage = ({ children }) => {
    return (
        // <li className="list-group-item p-0 m-0">
        <img src={children} className="rounded" alt={children} />
        // </li>
    );
};

export default Pins;
