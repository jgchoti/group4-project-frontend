import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Api from "../Api";
import UploadImage from "./UploadImage";
import InputField from "./InputField";
import "./AddBookForm.css";

const DEFAULT_IMAGE_URL =
  "https://res.cloudinary.com/dpe8wsyk8/image/upload/v1727444224/missing_ursxfq.png";

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
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(`/`);
  };

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
        <h1>Add a Book </h1>
      </div>
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
            type="number"
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
          <div className="info-message">
            <p>Note:</p>
            <ul>
              <li>You can update the book's status once it's published.</li>
              <li>Remember to mark it as sold when applicable.</li>
              <li>
                After publication, you can edit most details, but the title and
                image cannot be changed.
              </li>
              <li>
                Your email and phone number from your account will be shared
                with potential buyers for contact purposes.
              </li>
            </ul>
          </div>
          <div className="center">
            <button type="submit">Add Book</button>
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="link-to-home">
          <NavLink to="/">Return to Home</NavLink>
        </div>
      )}
    </div>
  );
};

export default AddBookForm;
