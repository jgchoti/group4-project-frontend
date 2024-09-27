import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import BookViewDetail from "../components/BookViewDetail";
import Api from "../Api";
import SellerContainer from "../components/SellerContainer";

const BookViewDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [image, setImage] = useState("");
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setIsLoggedIn(true);
    }

    Api(`books/${id}`)
      .then((data) => {
        setBook(data[0]);
        setImage(data[0].image);
        console.log(data);
      })
      .catch((error) => {
        console.log(`can't get data of book id ${id}`, error);
      });
  }, [id]);

  useEffect(() => {
    if (user && book && user.id === book.seller_id) {
      setIsSeller(true);
    }
  }, [user, book]);

  if (!book) {
    return (
      <div className="book-item">
        <p>This book is unavailable.</p>
        <div className="link-to-home">
          <NavLink to="/books">Check other available books</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="book-detail-wrapper">
      <BookViewDetail book={book} image={image} isLoggedIn={isLoggedIn} />
      {isSeller && <SellerContainer id={id} book={book} />}
    </div>
  );
};

export default BookViewDetailPage;
