import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    const audio = new Audio("/media/chalo.mp3");
    audio.loop = true; // Keeps audio playing infinitely

    // Play audio once user interacts
    const playAudio = () => {
      audio.play().catch(error => console.log("Audio playback error:", error));
    };

    // Wait for user click interaction to start audio
    document.addEventListener("click", playAudio);

    // Cleanup audio and event listener when the component unmounts
    return () => {
      document.removeEventListener("click", playAudio);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="home-container">
      {/* Full-screen background animation */}
      <video autoPlay loop muted className="background-video">
        <source src="/media/Animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for the welcome text */}
      <div className="overlay">
        <h1 className="fade-in">Welcome to the Ride Share App</h1>
        <p className="fade-in delay">Make your ride just one click</p>
      </div>
    </div>
  );
}

export default Home;
