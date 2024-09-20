import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import EditBookForm from "../components/EditBookForm";

const EditBook = () => {
  const { id } = useParams();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  if (!token) {
    return (
      <div>
        <p>Please log in to edit a book</p>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Your Book</h1>
      <EditBookForm token={token} id={id} />
    </div>
  );
};

export default EditBook;
