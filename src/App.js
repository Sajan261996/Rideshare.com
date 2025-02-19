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
        .get("https://api.rideshare.com/api/rides", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error fetching rides:", error));
    }

    // Ensure audio plays on user interaction (fix autoplay issues)
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => console.error("Audio playback error:", error));
      }
    };
    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  const handleAudioEnd = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <Router>
        <div className="app-container">
          {/* Background Video */}
          <div className="background-animation">
            <video autoPlay loop muted className="background-video">
              <source src={`${process.env.PUBLIC_URL}/media/Animation.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Background Audio */}
          <audio ref={audioRef} onEnded={handleAudioEnd}>
            <source src={`${process.env.PUBLIC_URL}/media/background-audio.mp3`} type="audio/mpeg" />
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
