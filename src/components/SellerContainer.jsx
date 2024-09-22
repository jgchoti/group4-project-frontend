import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SellerContainer.css";
import Api from "../Api";

const SellerContainer = ({ id }) => {
  const [token, setToken] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) {
      return;
    }
    try {
      const response = await Api(`books/${id}`, "DELETE", null, token);
      if (response) {
        setDeleted(true);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (deleted) {
    return (
      <div>
        Book is deleted
        <NavLink to="/">Return to Home</NavLink>
      </div>
    );
  }
  return (
    <div className="button-container">
      <NavLink to={`/edit/${id}`}>
        <button className="button">Edit Book </button>{" "}
      </NavLink>
      <button className="button" type="submit" onClick={handleDelete}>
        Delete Book
      </button>
    </div>
  );
};

export default SellerContainer;
