import React from "react"
import logo from "../assets/logo.jpg"

const Header = () => {
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#f4f4f4",
      borderBottom: "2px solid #ddd",
    },
    logo: {
      height: "50px",
    },
    nav: {
      display: "flex",
      listStyle: "none",
      gap: "20px",
      margin: 0,
      padding: 0,
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontWeight: "bold",
    },
    linkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <header style={styles.header}>
      <img src={logo} alt="website logo" style={styles.logo} />
      <nav>
        <ul style={styles.nav}>
          <li><a href="/" style={styles.link}>Home</a></li>
          <li><a href="/about" style={styles.link}>About</a></li>
          <li><a href="/services" style={styles.link}>Services</a></li>
          <li><a href="/contact" style={styles.link}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
