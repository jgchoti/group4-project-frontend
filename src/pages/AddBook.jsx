import React, { useState, useEffect } from "react";
import UploadImage from "../components/UploadImage";
import { NavLink } from "react-router-dom";

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
      <UploadImage token={token} />
    </div>
  );
};

export default AddBook;
