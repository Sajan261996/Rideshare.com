import React, { useState } from "react";
import "./Wishlist.css";
import { FaHeart } from "react-icons/fa";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="wishlist-container">
      <FaHeart className="wishlist-icon" />
      <span className="wishlist-count">{wishlist.length}</span>
    </div>
  );
}

export default Wishlist;
