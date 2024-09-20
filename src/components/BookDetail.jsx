import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Capitalized } from "../utils/Capitalized";
import "./BookListings.css";
import "./BookDetail.css";

const BookDetail = ({ book, image }) => {
  return (
    <div className="book-item">
      <div className="book-detail-image-wrapper">
        <img src={image} alt="Book Cover" />
      </div>
      <div className="book-detail">
        <table>
          <tbody>
            {Object.keys(book).map((key, index) =>
              key !== "image" &&
              key !== "is_bestseller" &&
              key !== "id" &&
              key !== "seller_id" ? (
                <tr key={key}>
                  <th>{Capitalized(key)}</th>
                  <td>{book[key]}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookDetail;
