import React from 'react';
import './ViewBooks.css';
import { NavLink } from 'react-router-dom';
const ViewBooks = () => {
  return (
    <section className="view-books">
      <NavLink to="/books" className='book-link'>Check All Books</NavLink>
    </section>
  )
}

export default ViewBooks;