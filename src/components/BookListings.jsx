import React, { useEffect, useState } from "react";
import "./BookListings.css";
import BookListing from "./BookListing";
import Api from "../Api";
import { NavLink } from "react-router-dom";

const BookListings = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    Api("books/recent")
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  console.log(books);

  if (!books) {
    return <div>Loading...</div>;
  }

  return (
    <section className="book-listings">
      <div className="recent">
        <h1> Recently Added Books </h1>
      </div>
      <div className="book-listings-container">
        {books.map((book) => (
          <BookListing key={book.id} book={book} image={book.image} />
        ))}
      </div>
    </section>
  );
};

export default BookListings;
