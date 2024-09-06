import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AddBookForm from "../components/AddBookForm";

const AddBook = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  if (!token) {
    return (
      <div>
        <p>Please log in to upload images.</p>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }

  return (
    <div>
      <h1>Add a Book</h1>
      <AddBookForm token={token} />
    </div>
  );
};

export default AddBook;
