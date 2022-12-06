import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="flexOne">
          <h2>3FK5</h2>
          <p>Frontend Developer</p>
        </div>

        <div className="flexTwo">
          <a>
            <i className="uil uil-instagram"></i>
          </a>

          <a>
            <i className="uil uil-linkedin"></i>
          </a>

          <a>
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&#169; Oluwafikunmi. All rights reserved.</p>
      </div>
    </>
  );
}
