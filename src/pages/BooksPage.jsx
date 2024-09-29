import React, { useEffect, useState } from "react";
import Api from "../Api";
import { Link } from "react-router-dom";
import BookListing from "../components/BookListing";

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Api("books/all")
      .then((response) => {
        setBooks(response);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="book-listings-container">
        {books.map((book) => (
          <BookListing key={book.id} book={book} image={book.image} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
