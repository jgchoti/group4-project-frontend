import React, { useEffect, useState } from "react";
import "./BestSellers.css";
import rich from "../assets/rich.jpg";
import habits from "../assets/habits.jpg";
import mockingbird from "../assets/mockingbird.jpg";
// import books2 from '../books2.json';
import BestSeller from "./BestSeller";
import Api from "../Api";

const BestSellers = () => {
  const [bestSellerBooks, setBestSellerBooks] = useState(null);

  useEffect(() => {
    Api("books/best")
      .then((data) => {
        console.log("Best Books:", data);
        setBestSellerBooks(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // const images = {
  //   "rich.jpg": rich,
  //   "habits.jpg": habits,
  //   "mockingbird.jpg": mockingbird,
  // };
  if (!bestSellerBooks) {
    return <div>Loading...</div>;
  }
  return (
    <section className="book-listings">
      <div className="recent">
        <h1> Best Seller Books </h1>
      </div>
      <div className="book-listings-container">
        {bestSellerBooks.map((book) => (
          <BestSeller
            key={book.id}
            book={book}
            image={book.image} // Pass the resolved image URL here
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
