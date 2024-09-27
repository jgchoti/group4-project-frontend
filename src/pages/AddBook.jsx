import React, { useState, useEffect } from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import AddBookForm from "../components/AddBookForm";
import { Forward } from "react-bootstrap-icons";
import Login from "./Login";

const AddBook = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  if (!token) {
    return (
      <div>
        <h1>To add Books you have to Login First</h1>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
    );
  }

  return (
    <div>
      <AddBookForm token={token} />
    </div>
  );
};

export default AddBook;
