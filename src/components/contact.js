import React from "react";
import './contact.css'

export default function Contact() {
    return (
        <>
            <div
                className="contact">
                <div
                    className="header">
                    <h2>Contact Me</h2>
                    <p>Get in touch</p>
                </div>

                <div className="form">
                    <div className="flex1">
                        <div className="item1">
                            <div className="item1a">
                                <i className="uil uil-phone"></i>
                            </div>
                        
                            <div className="item1b">
                                <h3>Call Me</h3>
                                <p className="number">2348075332918</p>
                            </div>
                        
                        </div>

                        <div className="item2">
                            <div className="item2a">
                                <i className="uil uil-envelope"></i>
                            </div>

                            <div className="item2b">

                                <h3>Email</h3>
                                <p className="number">fikunmiadekunle@gmail.com</p>

                            </div>
                        </div>

                        <div className="item3">
                            <div className="item3a">
                                <i className="uil uil-map-marker"></i>

                            </div>

                            <div className="item3b">
                                <h3>Location</h3>
                                <p className="number">Peru - Lima Av.Bolivar #123</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="flex2">
                        <div className="name-div">
                            <textarea cols="36" rows="10" placeholder="Name"></textarea>
                            <textarea cols="36" rows="10" placeholder="Email"></textarea>
                        </div>
                    
                        <div className="email-div">
                            <textarea cols="30" rows="10" placeholder="Project"></textarea>
                        </div>

                        <div className="comment-div">
                            <textarea cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
            
                        <div className="submit-div">
                            <button>
                                Send Message <i className="uil uil-message"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}