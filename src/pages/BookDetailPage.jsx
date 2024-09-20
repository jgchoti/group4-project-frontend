import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import BookDetail from "../components/BookDetail";
import Api from "../Api";
import SellerContainer from "../components/SellerContainer";

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [image, setImage] = useState("");
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
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
      <div>
        <p>This book is sold or unavailable.</p>
        <NavLink to="/books">Check other available books</NavLink>
      </div>
    );
  }

  return (
    <div className="book-detail-wrapper">
      <BookDetail book={book} image={image} />
      {isSeller && <SellerContainer id={id} book={book} />}
    </div>
  );
};

export default BookDetailPage;
