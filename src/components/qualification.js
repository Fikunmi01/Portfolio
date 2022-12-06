import React from "react";
import "./qualifications.css";
import { NavLink } from "react-router-dom";

export default function Qualifications() {
  return (
    <>
      <div className="qualification">
        <div className="header">
          <h2>Qualification</h2>
          <p>My personal journey</p>
        </div>

        <div className="qualification-menu">
          <div>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "link")}
              to="education"
            >
              <i className="uil uil-graduation-cap"></i>
              Education
            </NavLink>
          </div>

          <div className="gen-rounder">
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>

            <span className="qualification__rounder" id="sub-rounder"></span>
            <span className="qualification__line" id="sub-line"></span>

            <span className="qualification__rounder" id="sub-rounder1"></span>
            <span className="qualification__line" id="sub-line1"></span>

            <span className="qualification__rounder" id="sub-rounder2"></span>
            <span className="qualification__line" id="sub-line2"></span>

            <span className="qualification__rounder" id="sub-rounder3"></span>
          </div>

          <div>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "link")}
              to="work"
            >
              <i className="uil uil-briefcase-alt"></i>
              Work
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
