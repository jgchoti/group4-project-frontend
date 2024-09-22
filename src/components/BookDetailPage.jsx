import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../Api'; // Importar la función de llamada a la API
import '../components/styles/BookDetailPage.css'; // Importar el CSS

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await Api(`books/${id}`, "GET", null, token);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBookDetails();
  }, [id, token]);

  const handleDelete = async () => {
    try {
      await Api(`books/${id}`, "DELETE", null, token);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-detail-container">
      <h1 className="book-title">{book.title}</h1>
      <p className="book-info">Author: {book.author}</p>
      <p className="book-info">Price: ${book.price}</p>
      <p className="book-description">{book.information}</p>
      {book.seller_id === currentUser.id && (
        <button className="delete-btn" onClick={handleDelete}>Delete Book</button>
      )}
    </div>
  );
};

export default BookDetailPage;
