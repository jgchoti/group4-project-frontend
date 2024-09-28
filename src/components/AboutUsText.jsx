import React from "react";
import "./AboutUsText.css";

const AboutUsText = () => {
  return (
    <div className="about-us-text">
      <div className="sub-text">
        <p>
          Welcome to <strong>BookMate</strong>, your online marketplace for
          discovering, selling, and purchasing pre-loved books. <br />
          At BookMate, we make book trading simple, safe, and enjoyable.
        </p>
        <p>
          Whether you're buying or selling, you're contributing to a community
          that values knowledge, stories, and sustainability.
        </p>
      </div>
      <h2>How to Use BookMate</h2>

      <h3>For Buyers:</h3>
      <ul>
        <li>
          <strong>Browse Books:</strong> Explore our wide selection of available
          books.
        </li>
        <li>
          <strong>Search by Keywords:</strong> Use the search bar to quickly
          find books by title, author, or keywords.
        </li>
        <li>
          <strong>View Book Details:</strong> Click on a book to see its full
          details, including price and delivery options.
          <em>Note: You must log in to view seller information.</em>
        </li>
        <li>
          <strong>Contact Sellers:</strong> Once logged in, connect directly
          with sellers to arrange purchases or ask questions.
        </li>
        <li>
          <strong>Purchase & Delivery:</strong> Negotiate the price and decide
          on a delivery method (shipping or local pickup) with the seller.
        </li>
      </ul>

      <h3>For Sellers:</h3>
      <ul>
        <li>
          <strong>Create an Account:</strong> Sign up for free to start selling
          your books.
        </li>
        <li>
          <strong>List Your Books:</strong> Add an image and details like title,
          author, genre, condition, price, and description to showcase your
          books.
        </li>
        <li>
          <strong>Manage Your Listings:</strong> Keep your listings current,
          edit them as needed, and mark books as "Sold" when they're no longer
          available.
        </li>
        <li>
          <strong>Communicate with Buyers:</strong> Reply to inquiries and
          arrange delivery or pickup with potential buyers.
        </li>
        <li>
          <strong>Get Paid:</strong> Once a sale is completed, receive payments
          directly from buyers via your preferred method.
        </li>
      </ul>

      <br />
      <p>Happy reading!</p>
    </div>
  );
};

export default AboutUsText;
