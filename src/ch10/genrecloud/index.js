import React from "react";
import PropTypes from "prop-types";

import { LgButton, MdButton, SmButton } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

function GenreCloud({ genres }) {
    let buttons = genres.map((genre, i) => {
        return i > 21 ? (
            <SmButton
                key={i + genre}
                variant="light"
                style={{ margin: "0.25rem" }}
            >
                {genre}
            </SmButton>
        ) : i > 9 ? (
            <MdButton
                key={i + genre}
                variant="light"
                style={{ margin: "0.25rem" }}
            >
                {genre}
            </MdButton>
        ) : (
            <LgButton
                key={i + genre}
                variant="light"
                style={{ margin: "0.25rem" }}
            >
                {genre}
            </LgButton>
        );
    });

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <FontAwesomeIcon className="mx-1" icon={faFire} /> Popular
                    Genres
                </div>
                <div className="card-body text-center">
                    {buttons}
                </div>
            </div>
        </div>
    );
}

GenreCloud.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default GenreCloud;
