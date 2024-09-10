import React from "react";
import Hero from "../components/Slogan";
import BookListings from "../components/BookListings";
import BestSellers from "../components/BestSellers";
import ViewBooks from "../components/ViewBooks";
import WelcomeMessage from "../components/WelcomeMessage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WelcomeMessage />
      <BookListings />
      <ViewBooks />
      <BestSellers />
    </>
  );
};

export default HomePage;
