import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#212529", // dark blackish gray
        color: "#ffffff",
        padding: "30px 20px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <div style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "bold" }}>
        TextCount
      </div>

      <div style={{ marginBottom: "10px" }}>
        <a href="#/" style={linkStyle}>Home</a>
        <a href="#/about" style={linkStyle}>About</a>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <a
          href="mailto:your.vaduniniranjan@gmail.com"
          style={linkStyle}
        >
         Contact
        </a>
        <a
          href="https://www.linkedin.com/in/vaduni-niranjan-6a2780311"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Vaduni/React"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          GitHub
        </a>
      </div>

      <p style={{ fontSize: "14px", opacity: 0.7, marginBottom: "5px" }}>
        &copy; {new Date().getFullYear()} TextCount. All rights reserved.
      </p>

      <p style={{ fontSize: "13px", opacity: 0.6 }}>
        Built with ❤️ by Niranjan Vaduni
      </p>
    </footer>
  );
};

const linkStyle = {
  color: "#ffffff",
  margin: "0 15px",
  textDecoration: "none",
  fontSize: "16px",
  transition: "color 0.3s ease",
};

export default Footer;
