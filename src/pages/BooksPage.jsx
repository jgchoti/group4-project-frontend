import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  
  
  useEffect(() => {
    
    axios.get('http://localhost:5001/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.book.id} className="book-item">
            <img src={book.image_url} alt={book.title} style={{ width: '150px', height: '200px' }} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Condition: {book.condition}</p>
            <p>Genre: {book.genre}</p>
            <p>Published Year: {book.publishedYear}</p>
            <p>Price: €{book.price}</p>
            
            <Link to={`/books/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;


