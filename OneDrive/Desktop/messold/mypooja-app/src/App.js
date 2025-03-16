import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/HeaderMain/Navbar"; // Corrected import path
import Login from "./component/HeaderMain/Login"; // Corrected import path
import Search from "./component/HeaderMain/Search";
import Wishlist from "./component/HeaderMain/Wishlist";
import Chat from "./component/HeaderMain/Chat";
import Home from "./component/body/Home";
import Footer from "./component/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Sale Header */}
        <header className="sale-header">
          END OF SEASON SALE IS NOW LIVE
        </header>

        {/* Logo Section */}
        <div className="logo">
          <h3>My</h3>
          <h1>POOJA BOX</h1>
          <h5>THE ART OF GIFTING</h5>        
        </div>

        {/* Navbar remains visible always */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<h1></h1>} /> {/* Placeholder for home page */}
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Home />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
