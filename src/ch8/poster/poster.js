import React from 'react';
import './poster.css';

function Poster({ poster }) {
  const { imgSrc, title, caption } = poster;
  return (
    <div className="poster">
      <div className="imgWrapper">
        <img src={imgSrc} alt="Poster" className="image" />
      </div>
      <div className="title">{title}</div>
      <div className="caption">{caption}</div>
    </div>
  );
}

export default Poster;
