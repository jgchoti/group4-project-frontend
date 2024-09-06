import React from "react";
import { useState } from "react";

const BookListing = ({ book, image }) => {
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
            <h3>Condition:</h3>
            <p>{book.book_condition}</p>
            <h3>Price:</h3>
            <p>{book.price}</p>
            <h3>Email Address:</h3>
            <p>{book.email}</p>
            <h3>Phone Number:</h3>
            <p>{book.phone}</p>
            <h3>Location:</h3>
            <p>{book.city}</p>
            <h3>Delivery Method:</h3>
            <p>{book.delivery}</p>
            <h3>Additional Info:</h3>
            <p>{book.information}</p>
          </>
        )}
        <button onClick={toggleShowMore} className="toggle-button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </article>
  );
};

export default BookListing;
