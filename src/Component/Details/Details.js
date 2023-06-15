import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListOfFilms } from "../../Shared/ListOfFilms";
import ModalFilmCase from "../Modal/ModalFilmCase";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
import "./styleDetail.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
export default function Details() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const [filmDetail, setFilmDetail] = useState({});
  // const [listRecommendedFilm, setListRecommended] = useState([]);
  const [isShow, setShow] = useState(false);
  const filmsID = useParams();
  const id = parseInt(filmsID.id);
  const filmItem = ListOfFilms.find((film) => id === film.id);
  /* const recommendFilms = () => {
  //   let filmList = [];
  //   while (numElement > 0) {
  //     const randomNum = Math.floor(Math.random() * 24);
  //     if (!filmList.includes(ListOfFilms[randomNum])) {
  //       filmList.push(ListOfFilms[randomNum]);
  //       numElement--;
  //     }
  //   }
  //   return filmList;
  // };

  // useEffect(() => {
  //   setListRecommended(recommendFilms);
  // }, [filmsID])*/
  return (
    <div className="row">
      <div className="box-film">
        <div className="row">
          <h3>{filmItem.title} </h3>

          <div className="col-3">
            <div className="content-left">
              <div className="row">
                <div className="col box-content-left">
                  <div className="card-img-cover">
                    <img src={`.${filmItem.img}`}></img>
                  </div>
                  <div className="card-content">
                    <ul className="card-meta">
                      <li>
                        <strong className="title-content">
                          Year of release:{" "}
                        </strong>
                        {filmItem.year}
                      </li>
                      <li>
                        <strong className="title-content">Director: </strong>
                        {filmItem.director}
                      </li>
                      <li>
                        <strong className="title-content">Writers: </strong>
                        {filmItem.writers}
                      </li>
                      <li>
                        <strong className="title-content">Subtitle: </strong>Yes
                      </li>

                      <li>
                        <strong className="title-content">Type:</strong> Action,
                        Trailer
                      </li>
                      <li style={{ maxHeight: "100px", overflowY: "auto" }}>
                        <strong className="title-content">Content: </strong>
                        {filmItem.content}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="content-right">
              <div className="wrapper-img">
                <img src={`.${filmItem.imgVd}`}></img>
                <div className="icon-wrapper" onClick={() => setShow(true)}>
                  <PlayCircleFilledWhiteIcon className="icon_play"></PlayCircleFilledWhiteIcon>
                </div>
                {/* <div className="outner-film">
                  <h4>Recommend other film</h4>
                  <div>
                    <Slider {...settings}>
                      {listRecommendedFilm.map((film) => (
                        <Link to={`details/${film.id}`} key={film.id}>
                          <div className="" key={film.id}>
                            <div className="player-btn" onClick={() => {}}>
                              <i className="fa-solid fa-play"></i>
                            </div>
                            <div className="img_wrapper">
                              <img src={`.${film.img}`} alt={film.title}></img>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </Slider>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShow && <ModalFilmCase filmItem={filmItem} setShow={setShow} />}
    </div>
  );
}
