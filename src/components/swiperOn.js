import React from "react";
import { Data } from "./portfolioData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function Swiperslide() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {Data.map((portfolio,i)=> (
            <SwiperSlide>
                <div
                    className="catalogue">
                    <img src={portfolio.img} alt="" />                        

                    <span>
                        <h3>{portfolio.title}</h3>
                        <p>{portfolio.jobDescription}</p>
                        <a href="#.html">Demo <i className="uil uil-arrow-right"></i> </a>
                    </span>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </>
  );
}
