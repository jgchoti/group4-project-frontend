import React, { useState } from "react";
import './BestSeller.css';

const BestSeller = ({ book, image }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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
        {showMore && (
          <>
            <h3>Genre:</h3>
            <p>{book.genre}</p>
            <h3>Price:</h3>
            <p>{book.price}</p>
          </>
        )}
        <button onClick={toggleShowMore} className="toggle-button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </article>
  );
};

export default BestSeller;
