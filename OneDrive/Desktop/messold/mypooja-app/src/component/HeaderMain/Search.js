import React, { useState } from "react";
import "./Search.css";
import { FaSearch, FaTimes } from "react-icons/fa";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <button className="search-icon" onClick={() => setIsOpen(true)}>
        <FaSearch />
      </button>

      {isOpen && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
