import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./BestSeller.css";

const BestSeller = ({ book, image }) => {
  return (
    <article className="book-item">
      <div className="image-wrapper">
        <img src={image} alt="Book Cover" />
      </div>
      <div className="book-info">
        <h2>Book Title:</h2>
        <p>{book.title}</p>
        <h3>Author:</h3>
        <p>{book.author}</p>
        <NavLink to={`/books/${book.id}`}>
          <button className="toggle-button">Show Detail</button>
        </NavLink>
      </div>
    </article>
  );
};

export default BestSeller;
