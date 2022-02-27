import React from "react";

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "./swpe.css";

//import elec from "/swiper/img/elec.jpg";
//import mech from "./swiper/img/mech.jpg";
//import plum from "./swiper/img/plum.jpg";
SwiperCore.use([Pagination]);

const Slides = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <section
            className="swiper-slide slide"
            style={{
              background: ` linear-gradient(to right, rgb(35 54 87 / 100%), rgb(255 255 255 / 4%)), url(/swiper/img/elec.jpg) no-repeat `,
            }}
          >
            <div className="content">
              <h3>Why Fix It Yourself? Leave It To The Pros!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas impedit labore dolore unde, quidem corrupti?
              </p>
              <a href="#" className="btna">
                get started
              </a>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide"
            style={{
              background: `linear-gradient(to right, rgb(35 54 87 / 100%), rgb(255 255 255 / 4%)),url(/swiper/img/mech.jpg) no-repeat`,
            }}
          >
            <div className="content">
              <h3>Why Fix It Yourself? Leave It To The Pros!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas impedit labore dolore unde, quidem corrupti?
              </p>
              <a href="#" className="btna">
                get started
              </a>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide"
            style={{
              background: `linear-gradient(to right, rgb(35 54 87 / 100%), rgb(255 255 255 / 1%)),url(/swiper/img/plum.jpg) no-repeat`,
            }}
          >
            <div className="content">
              <h3>Why Fix It Yourself? Leave It To The Pros!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas impedit labore dolore unde, quidem corrupti?
              </p>
              <a href="#" className="btna">
                get started
              </a>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
