import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaUser, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#">Shop ▼</a></li>
        <li><a href="#">Home Decor ▼</a></li>
        <li><a href="#">Festive Decor</a></li>
        <li><a href="#">Corporate Gifting</a></li>
        <li><a href="#">Navigation Menu</a></li>
        <li><a href="#">Round Categories</a></li>
        <li><a href="#">USP's</a></li>
        <li><a href="#">Review</a></li>
      </ul>

      {/* Right-Side Icons */}
      <div className="nav-icons">
        <Link to="/login" className="icon">
          <FaUser />
          <span>ACCOUNT</span>
        </Link>

        <Link to="/search" className="icon">
          <FaSearch />
          <span>SEARCH</span>
        </Link>

        <Link to="/wishlist" className="icon wishlist">
          <FaHeart />
          <span>WISHLIST</span>
          <span className="badge">0</span> {/* Wishlist count */}
        </Link>

        <Link to="/cart" className="icon">
          <FaShoppingBag />
          <span>CART</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
