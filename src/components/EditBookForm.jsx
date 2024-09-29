import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Api from "../Api";
import InputField from "./InputField";
import "./AddBookForm.css";

const EditBookForm = ({ id, token }) => {
  const [book, setBook] = useState({});
  const [formData, setFormData] = useState({
    author: "",
    genre: "",
    book_condition: "",
    price: "",
    city: "",
    delivery: "",
    information: "",
    status: true,
  });
  const [message, setMessage] = useState("");
  const [bookEdited, setBookEdited] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Api(`books/${id}`)
      .then((data) => {
        console.log(data[0]);
        setBook(data[0]);
      })
      .catch((error) => {
        console.log(`error fetching data book id ${id}`);
      });
  }, [id]);

  const handleCancel = () => {
    navigate(`/books/${id}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let fieldValue = value;
    if (name === "status") {
      fieldValue = value === "true";
    }

    setFormData((prevData) => ({ ...prevData, [name]: fieldValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const statusValue = formData.status ? 1 : 0;

    const data = {
      image: book.image,
      title: book.title,
      author: formData.author || book.author,
      genre: formData.genre || book.genre,
      book_condition: formData.book_condition || book.book_condition,
      price: formData.price || book.price,
      city: formData.city || book.city,
      delivery: formData.delivery || book.delivery,
      information: formData.information || book.information,
      status: statusValue,
    };

    try {
      console.log(data);
      const response = await Api(`books/${id}`, "PUT", data, token);
      console.log("Book edited successfully:", response);
      setMessage("Book Edited successfully!");
      setBookEdited(true);
    } catch (error) {
      setMessage(`Failed to edit book, please try again. ${error}`);
      console.error("Error edit book:", error);
    }
  };

  return (
    <div className="add-book-form">
      <div className="book-item">
        <div className="book-detail-image-wrapper">
          <img src={book.image} alt="Book Cover" />
        </div>
        <h2>{book.title}</h2>
        {!bookEdited ? (
          <form onSubmit={handleSubmit}>
            <label>Mark this book as</label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value={true}>Available</option>
              <option value={false}>Sold</option>
            </select>
            <InputField
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              label="Author:"
              placeholder={book.author}
            />
            <InputField
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              label="Genre:"
              placeholder={book.genre}
            />
            <InputField
              type="text"
              name="book_condition"
              value={formData.book_condition}
              onChange={handleInputChange}
              label="Condition:"
              placeholder={book.book_condition}
            />
            <InputField
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              label="Price (€):"
              min="0"
              step="0.01"
              placeholder={book.price}
            />
            <InputField
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              label="City:"
              placeholder={book.city}
            />
            <InputField
              type="text"
              name="delivery"
              value={formData.delivery}
              onChange={handleInputChange}
              label="Delivery Info:"
              placeholder={book.delivery}
            />
            <div className="input-field">
              <label htmlFor="information">Additional Information:</label>
              <textarea
                id="information"
                name="information"
                value={formData.information}
                onChange={handleInputChange}
                placeholder={book.information}
              />
            </div>
            <button type="submit">Edit Book</button>
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-button"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <p>{message}</p>
            <NavLink to={`/books/${id}`}>View Book Details</NavLink>
            <br />
            <NavLink to="/">Return to Home</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBookForm;
