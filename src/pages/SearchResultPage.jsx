import React from "react";
import { useLocation } from "react-router";
import BookListing from "../components/BookListing";
import "../components/BookListings.css";

const SearchResultPage = () => {
  const location = useLocation();
  const searchTerm = location.state.searchTerm;
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h1>Search Results For "{searchTerm}"</h1>
      {typeof searchResults === "string" ? (
        <p>{searchResults}</p>
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
