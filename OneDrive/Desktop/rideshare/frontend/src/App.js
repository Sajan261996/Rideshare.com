import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import Navbar from "./components/Navbar";
import axios from "axios";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/rides", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error fetching rides:", error));
    }

    // Play audio when the animation starts
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleAudioEnd = () => {
    // Stop audio when it finishes playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to the beginning
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <Router>
        <div className="app-container">
          <div className="background-animation">
            <video autoPlay loop muted className="background-video">
              <source src="/media/Animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Audio element to play background sound */}
          <audio 
            ref={audioRef} 
            onEnded={handleAudioEnd} 
          >
            <source src="/media/background-audio.mp3" type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>

          <Navbar />
          <h1 className="fade-in">Welcome to the Ride Share App</h1>
          <p className="fade-in delay">Make your ride just one click</p>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/map" element={<Map />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LoadScript>
  );
};

export default App;
