import React from "react";
import "./BestSellers.css";
import rich from '../assets/rich.jpg';
import habits from '../assets/habits.jpg';
import mockingbird from '../assets/mockingbird.jpg';
import books2 from '../books2.json';
import BestSeller from "./BestSeller";

const BestSellers = () => {

  const images = {
    'rich.jpg': rich,
    'habits.jpg': habits,
    'mockingbird.jpg': mockingbird
  };


  return (
    <section className="book-listings">
        <div className="recent">
          <h1> Best Seller Books </h1>
        </div>
      <div className="book-listings-container">
        {books2.map((book) => (
          <BestSeller
            key={book.id}
            book={book}
            image={images[book.image]}  // Pass the resolved image URL here
          />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;