import React, { useEffect, useState } from "react";
import "./BookListings.css";
import george from "../assets/george.jpg";
import orientalism from "../assets/orientalism.jpg";
import secret from "../assets/secret.jpg";
import BookListing from "./BookListing";
import Api from "../Api";

const BookListings = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    Api("books/all")
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const images = {
    "george.jpg": george,
    "orientalism.jpg": orientalism,
    "secret.jpg": secret,
  };

  if (!books) {
    return <div>Loading...</div>;
  }

  const recentBooks = books.slice(0, 3);
  return (
    <section className="book-listings">
      <div className="recent">
        <h1> Recently Added Books </h1>
      </div>
      <div className="book-listings-container">
        {recentBooks.map((book) => (
          <BookListing key={book.id} book={book} image={images[book.image]} />
        ))}
      </div>
    </section>
  );
};

export default BookListings;
