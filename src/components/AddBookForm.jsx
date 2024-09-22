import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Api from "../Api";
import UploadImage from "./UploadImage";
import InputField from "./InputField";
import "./AddbookForm.css";

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
               <div className="label">
               Add a Book </div>
      {message && <p>{message}</p>}
      {!bookAdded ? (
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            label="Title:"
            required={true}
          />

          <InputField
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            label="Author:"
            required={true}
          />

          <InputField
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            label="Genre:"
            required={true}
          />

          <InputField
            type="text"
            name="book_condition"
            value={formData.book_condition}
            onChange={handleInputChange}
            label="Condition:"
            required={true}
          />

          <InputField
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            label="Price (€):"
            min="0"
            step="0.01"
            required={true}
          />

          <InputField
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            label="City:"
            required={true}
          />

          <InputField
            type="text"
            name="delivery"
            value={formData.delivery}
            onChange={handleInputChange}
            label="Delivery Info:"
            required={true}
          />
          
          <InputField
            type="text"
            name="information"
            value={formData.information}
            onChange={handleInputChange}
            label=" Information:"
          />

          

          <UploadImage token={token} handleImageUpload={handleImageUpload} />
          <div className="center">
          <button type="submit">Add Book</button></div>
        </form>
      ) : (
        <NavLink to="/">Return to Home</NavLink>
      )}
    </div>
  );
};

export default AddBookForm;
