import React from "react";
import { useLocation } from "react-router";
import BookListing from "../components/BookListing";
import "../components/BookListings.css";

const SearchResultPage = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h1>{`Search Results For "${searchTerm}"`}</h1>

      {typeof searchResults === "string" ? (
        <div className="no-results">
          <p>{searchResults}</p>
          <iframe
            src="https://giphy.com/embed/6uGhT1O4sxpi8"
            width="480"
            height="240"
            style={{ margin: "36px auto", display: "block" }}
          ></iframe>
        </div>
      ) : (
        <div className="book-listings-container">
          {searchResults.map((book) => (
            <BookListing book={book} image={book.image} key={book.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
