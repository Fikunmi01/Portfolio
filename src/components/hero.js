import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="social-link">
          <a href="#.html">
            <i className="uil uil-github"></i>
          </a>

          <a href="#.html">
            <i className="uil uil-linkedin"></i>
          </a>

          <a href="#.html">
            <i className="uil uil-instagram-alt"></i>
          </a>

          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div className="hero-description">
          <h2>Hi, I'm Oluwafikunmi.</h2>

          <p className="role">Frontend Developer | Designer</p>
          <p>
            High level experience in web design and development knowledge,
            producing quality work
          </p>

          <button>
            Contact Me
            <i className="uil uil-navigator"></i>
          </button>

          <p className="scrollDown">
            <i className="uil uil-mouse-alt"></i>
            Scroll down
          </p>
        </div>

        <div className="hero-img">
          <img src="../image/heroImg.png" alt="hero png" />
        </div>
      </div>
    </>
  );
}
