import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="company-info">
          <h2>My Pooja Box</h2>
          <p>The Art of Gifting</p>
          <div className="social-icons">
            <button className="social-button">Facebook</button>
            <button className="social-button">Instagram</button>
          </div>
        </div>

        <div className="footer-links">
          <div className="column">
            <h3>INFORMATION</h3>
            <ul>
              <li>Track your Order</li>
              <li>Returns and Refunds</li>
              <li>Holiday List</li>
              <li>Terms & Conditions</li>
              <li>Aartis</li>
              <li>Privacy Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Deals & Coupons</li>
            </ul>
          </div>
          <div className="column">
            <h3>ABOUT MY POOJA BOX</h3>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Corporate Enquiry</li>
              <li>Exchange/Cancel My Order</li>
            </ul>
          </div>
          <div className="column">
            <h3>CUSTOMER CARE</h3>
            <p><strong>Phone:</strong> +91 8010288882 | +91 8010188881</p>
            <p><strong>Email:</strong> orders@mypoojabox.com</p>
            <p><strong>Address:</strong> My Pooja Box, Jagat Complex, 100 Ft Rd, Ghitorni, New Delhi 110030</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="app-links">
            <button className="app-button">Google Play</button>
            <button className="app-button">App Store</button>
          </div>
          <p>© 2025, All Rights Reserved.</p>
        </div>
      </div>
      <div className="whatsapp-button">WhatsApp</div>
    </footer>
  );
};

export default Footer;
