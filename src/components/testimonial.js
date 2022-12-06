import React from "react";
import "./testimonial.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Testimonial() {
  const review = [
    {
      id: 0,
      name: "Sarah Williams",
      review:
        "I get a good impression, I carry out my projject with the best possible quality and attention and support 24hours a day. They offer the best quality you can get.",
    },
    {
      id: 1,
      name: "John Agnes",
      review:
        "I get a good impression, I carry out my projject with the best possible quality and attention and support 24hours a day",
    },
    {
      id: 2,
      name: "Bola Sobowale",
      review:
        "I get a good impression, I carry out my projject with the best possible quality and attention and support 24hours a day",
    },
    {
      id: 3,
      name: "Michael Clayfield",
      review:
        "I get a good impression, I carry out my projject with the best possible quality and attention and support 24hours a day",
    },
    {
      id: 4,
      name: "John Austin",
      review:
        "I get a good impression, I carry out my projject with the best possible quality and attention and support 24hours a day",
    },
    {
      id: 5,
      name: "Nico Williams",
      review:
        "I get a good impression, I carry out my projject with the best possible quality and attention and support 24hours a day",
    },
  ];
  return (
    <>
      <div className="testimonial">
        <div className="header">
          <h2>Testimonial</h2>
          <p>What my client says</p>
        </div>

        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {review.map((review, i) => (
              <div key={review.id}>
                <SwiperSlide key={review.id}>
                  <div className="swiper-column">
                    <p className="author">{review.name}</p>

                    <p className="client">Client</p>

                    <p className="review">{review.review}</p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </>
      </div>
    </>
  );
}
