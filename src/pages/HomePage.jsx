import React from 'react'
import Hero from "../components/Slogan";
import BookListings from "../components/BookListings";
import BestSellers from "../components/BestSellers";
import ViewBooks from "../components/ViewBooks";

const HomePage = () => {
  return (
    <>
      <Hero />
      <BookListings />
      <ViewBooks />
      <BestSellers />

    </>
  )
}

export default HomePage