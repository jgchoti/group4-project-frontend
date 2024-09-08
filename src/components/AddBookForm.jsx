import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Api from "../Api";
import UploadImage from "./UploadImage";
const DEFAULT_IMAGE_URL =
  "http://cdn.bakerpublishinggroup.com/covers/listing/missing.png";

const AddBookForm = ({ token }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    book_condition: "",
    price: "",
    city: "",
    delivery: "",
    information: "",
    image: "",
  });
  const [message, setMessage] = useState("");
  const [bookAdded, setBookAdded] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (image) => {
    setFormData((prevData) => ({ ...prevData, image }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      image: formData.image || DEFAULT_IMAGE_URL,
    };
    try {
      const response = await Api("books/add", "POST", data, token);
      console.log("Book added successfully:", response);
      setMessage("Book added successfully!");
      setBookAdded(true);
    } catch (error) {
      setMessage("Failed to add book, please try again.");
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="add-book-form">
      <h2>Add a Book</h2>
      {message && <p>{message}</p>}
      {!bookAdded ? (
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />

          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />

          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            required
          />

          <label>Condition:</label>
          <input
            type="text"
            name="book_condition"
            value={formData.book_condition}
            onChange={handleInputChange}
            required
          />

          <label>Price(€):</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            min="0"
            step="0.01" // Allows decimal values
            required
          />

          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />

          <label>Delivery Info:</label>
          <input
            type="text"
            name="delivery"
            value={formData.delivery}
            onChange={handleInputChange}
            required
          />

          <label>Additional Information:</label>
          <textarea
            name="information"
            value={formData.information}
            onChange={handleInputChange}
          />

          <UploadImage token={token} handleImageUpload={handleImageUpload} />

          <button type="submit">Add Book</button>
        </form>
      ) : (
        <NavLink to="/">Return to Home</NavLink>
      )}
    </div>
  );
};

export default AddBookForm;
