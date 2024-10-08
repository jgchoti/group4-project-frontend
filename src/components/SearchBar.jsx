import React, { useState } from "react";
import { useNavigate } from "react-router";
import Api from "../Api";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cleanSearchTerm = searchTerm.toLowerCase().trim();
      let data = await Api(`books/search/${cleanSearchTerm}`, "GET");
      console.log(data);
      if (data.message) {
        data = data.message;
      }
      navigate("/search-result", {
        state: { searchResults: data, searchTerm: searchTerm },
      });
    } catch {
      console.log("error searching");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-bar"
      />
      <button type="submit" className="btn-search">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
