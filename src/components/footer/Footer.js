import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        <div>
          <h4>About</h4>
          <p>Learn more about our mission and values.</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul style={listStyle}>
            <li><a href="/about" style={linkStyle}>About Us</a></li>
            <li><a href="/services" style={linkStyle}>Services</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>
            <a href="https://twitter.com" style={linkStyle}>Twitter</a> | 
            <a href="https://facebook.com" style={linkStyle}> Facebook</a>
          </p>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
};

const footerContainer = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 20px",
  maxWidth: "1000px",
  margin: "0 auto",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Footer;
