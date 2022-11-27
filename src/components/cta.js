import React from "react";
import './cta.css'

export default function Cta() {
    return (
        <div className="cta">
            <div
                className="cta-card">
                <span
                    className="one">
                    <h3>You have a new project?</h3>
                    <p>Contact me and get 30% discount on your new project</p>
                    
                    <button>
                        Contact Me
                        <i className="uil uil-navigator"></i>
                    </button>
                </span>

                <span
                    className="two">
                    <img src="./image/Humaans.png" alt="" />
                </span>
            </div>
        </div>
    )
}