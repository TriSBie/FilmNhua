import React, { useMemo } from "react";
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
// import Button from '@mui/material-next/Button';

export default function BodyContent({ listFilms }) {

  const sliderFilm = useMemo(() => {
    return listFilms.filter((film) => film.feature["isSlider"] === true)
  }, [listFilms])


  console.log(sliderFilm)
  return (
    <div className="row slider" >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderFilm.map((film, index) => (
          <>
            <SwiperSlide key={index}>
              <div
                className="swippedWrapper"
                style={{
                  backgroundImage: `url(${film.imgBanner})`,
                  display: "flex",
                  borderRadius: "1rem",
                  height: "30rem",
                  width: "100 %",
                  overflow: "hidden",
                  position: "relative",
                  transition: "border .3s, background .3s",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="infor">
                  <div className="top">
                    <div className="title">
                      {film.title}
                    </div>
                  </div>
                  <div className="bottom">
                    <Link to={`detail/${film.id}`}>
                      <Button
                        sx={{
                          border: '1px solid #ecececec',
                          color: '#fff'
                        }}
                        size="large"
                        variant="outlined"
                      >Watch Now</Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <img alt="" src={`${film.imgBanner}`} />
              </div>
              <div className="banner-body">
                <div className="row">
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
              </div> */}
            </SwiperSlide >
            {/* <SwiperSlide key={film.id}>
              <div
                className="wrapperImg"
              >
                <img alt="" src={`${film.imgBanner}`} />
              </div>
              <div className="banner-body">
                <div className="row">
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
            </SwiperSlide> */}
          </>
        ))}
      </Swiper>
    </div >
  );
}
