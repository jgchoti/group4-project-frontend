import React from "react";
import "./BookListings.css";
import george from "../assets/george.jpg";
import orientalism from '../assets/orientalism.jpg';
import secret from '../assets/secret.jpg';
import BookListing from "./BookListing";
import books from '../books.json'

const BookListings = () => {
  const images = {
    'george.jpg': george,
    'orientalism.jpg': orientalism,
    'secret.jpg': secret
  };

  const recentBooks = books.slice(0,3);

  return (
    <section className="book-listings">
        <div className="recent">
          <h1> Recently Added Books </h1>
        </div>
      <div className="book-listings-container">
        {recentBooks.map((book) => (
          <BookListing
            key={book.id}
            book={book}
            image={images[book.image]}  
          />
        ))}
      </div>
    </section>
  );
};

export default BookListings;

