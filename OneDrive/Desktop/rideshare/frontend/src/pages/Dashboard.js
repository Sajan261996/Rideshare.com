import React from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        {/* Sidebar content (e.g., navigation, user info) */}
        <h2>Sidebar</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
        </ul>
      </aside>
      <main className="main-content">
        {/* Main content area */}
        <h1>Dashboard</h1>
        <div className="content-area">
          {/* Add your dashboard widgets, charts, tables, etc. here */}
          <p>Welcome to your dashboard!</p>

          {/* Adding the animation video */}
          <div className="animation-container">
            <video autoPlay loop muted>
              <source src="src/media/Animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
