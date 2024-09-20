import React, { useEffect, useState } from "react";
import "./BookListings.css";
import BookListing from "./BookListing";
import Api from "../Api";

const AllBookListings = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    Api("books/all")
      .then((data) => setAllBooks(data))
      .catch((error) => {
        console.log("can't fetch all books data", error);
      });
  });

  return (
    <section className="book-listings">
      <div className="book-listings-container">
        {allBooks.map((book) => (
          <BookListing key={book.id} book={book} image={book.image} />
        ))}
      </div>
    </section>
  );
};

export default AllBookListings;
