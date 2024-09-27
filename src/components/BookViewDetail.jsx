import React from "react";
import { NavLink } from "react-router-dom";
import { Capitalized } from "../utils/Capitalized";
import "./BookListings.css";
import "./BookViewDetail.css";

const BookViewDetail = ({ book, image, isLoggedIn }) => {
  const status = book.status === 1 ? "Available" : "Sold";

  const excludedKeys = [
    "image",
    "is_bestseller",
    "id",
    "seller_id",
    "seller_email",
    "seller_phonenumber",
    "status",
  ];

  return (
    <div className="book-item">
      <div className="book-detail-image-wrapper">
        <img src={image} alt={`${book.title} Cover`} className="book-image" />
      </div>

      <div className="book-detail">
        <h2
          className={`book-status ${
            status === "Available" ? "available" : "sold"
          }`}
        >
          {status}
        </h2>

        {/* Book Details */}
        <table className="book-details-table">
          <tbody>
            {Object.keys(book)
              .filter((key) => !excludedKeys.includes(key))
              .map((key) => (
                <tr key={key}>
                  <th>{Capitalized(key)}</th>
                  <td>{book[key]}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {status === "Available" ? (
          isLoggedIn ? (
            <div className="seller-info">
              <h3>Interested? Contact the seller:</h3>
              <p>
                <strong>Email:</strong> {book.seller_email}
              </p>
              <p>
                <strong>Phone:</strong> {book.seller_phonenumber}
              </p>
            </div>
          ) : (
            <div className="login-prompt">
              <p>
                Want to contact the seller? Please{" "}
                <NavLink to="/login" className="login-link">
                  log in
                </NavLink>{" "}
                to view the seller's details.
              </p>
            </div>
          )
        ) : (
          <div className="sold-message">
            <p>
              This book has been sold. Check out other books on our{" "}
              <NavLink to="/books" className="books-link">
                Books Page
              </NavLink>
              !
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookViewDetail;
