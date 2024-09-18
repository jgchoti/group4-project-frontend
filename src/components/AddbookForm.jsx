import React, { useState } from "react";
import '../components/styles/AddBook.css'; // Asegurarse de cargar el CSS adecuado

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    condition: '',
    price: '',
    email: '',
    city: '',
    phone: '',
    delivery: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del libro al servidor (aquí conectarías con tu backend)
    console.log(bookData);
  };

  return (
    <div className="add-book-container">
      <h1 className="form-title">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        {/* Primera columna */}
        <div className="form-column">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
          />

          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
          />

          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
          />
        </div>

        {/* Segunda columna */}
        <div className="form-column">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={bookData.price}
            onChange={handleChange}
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={bookData.city}
            onChange={handleChange}
          />

          <label htmlFor="delivery">Delivery Option</label>
          <input
            type="text"
            id="delivery"
            name="delivery"
            value={bookData.delivery}
            onChange={handleChange}
          />
        </div>

        {/* Botón de envío */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
