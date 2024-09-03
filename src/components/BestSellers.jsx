import React, { useEffect, useState } from "react";
import "./BestSellers.css";
import rich from "../assets/rich.jpg";
import habits from "../assets/habits.jpg";
import mockingbird from "../assets/mockingbird.jpg";
// import books2 from '../books2.json';
import BestSeller from "./BestSeller";
import Api from "../Api";

const BestSellers = () => {
  const [bestBooks, setBestBooks] = useState(null);

  useEffect(() => {
    Api("best")
      .then((data) => {
        setBestBooks(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const images = {
    "rich.jpg": rich,
    "habits.jpg": habits,
    "mockingbird.jpg": mockingbird,
  };
  if (!bestBooks) {
    return <div>Loading...</div>;
  }
  return (
    <section className="book-listings">
      <div className="recent">
        <h1> Best Seller Books </h1>
      </div>
      <div className="book-listings-container">
        {bestBooks.map((book) => (
          <BestSeller
            key={book.id}
            book={book}
            image={images[book.image]} // Pass the resolved image URL here
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
