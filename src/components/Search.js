// src/components/Search.js
import React, { useState } from "react";
import "./Search.css";
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default Search;
