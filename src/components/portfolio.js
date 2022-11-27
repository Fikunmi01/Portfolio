import React from "react";
import Swiperslide from "./swiper";
import './portfolio.css'

export default function Portfolio() {
    return (
        <>
            <div
                className="portfolio">
                <div
                    className="header">
                    <h2>Portfolio</h2>
                    <p>Most recent work</p>
                </div>

                <Swiperslide/>
                
            </div>
        </>
    )
}