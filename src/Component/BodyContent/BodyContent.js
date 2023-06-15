import React, { Component } from "react";
import "./styleBody.css";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function BodyContent({ sliderFilm }) {
  return (
    <div className="row slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderFilm.map((film) => (
          <SwiperSlide key={film.id}>
            <div
              className="wrapperImg"
              // style={{
              //   backgroundImage: `linear-gradient(to right bottom,rgba(0, 0, 0, 0.44),rgba(0, 0, 0, 0.715)), url(${film.imgBanner})`,
              //   backgroundPosition: "center",
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "contain",
              // }}
            >
              <img src={`.${film.imgBanner}`}></img>
            </div>
            <div className="banner-body">
              <div className="row">
                <div className="col">
                  <div className="banner-content">
                    <h3>{`${film.title} (${film.year}) - ${film.nation}`}</h3>
                    <span>{film.content}</span>
                    <Link to={`detail/${film.id}`}>
                      <Stack spacing={2} direction="row">
                        <Button variant="contained">Detail</Button>
                      </Stack>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="wrapperImg">
            <img src="/assests/imageSlider/2.jpg"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapperImg">
            <img src="/assests/imageSlider/3.jpg"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapperImg">
            <img src="/assests/imageSlider/4.jpg"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapperImg">
            <img src="/assests/imageSlider/5.jpg"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapperImg">
            <img src="/assests/imageSlider/6.jpg"></img>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
