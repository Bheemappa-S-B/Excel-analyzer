import React from "react";
import "../styles/FooterPage.css";
import BackButton from "./BackButton";

function FooterPage() {
  return (
    <div className="footerpage-container">
        <BackButton />
      <div className="footerpage-details">
        <b>Excel Work Project</b> &copy; {new Date().getFullYear()}<br />
        Designed by Bheemappa S B<br />
        Contact: <a href="bheemappabaraker9@gmail.com">bheemappabaraker9@gmail.com</a>
      </div>
    </div>
  );
}

export default FooterPage;