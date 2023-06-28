import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [filmItem, setFilmItem] = useState({});
  useEffect(() => {
    fetch(`https://6493c0730da866a95366a9e5.mockapi.io/Films/film_storage/${filmsID.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP RESPONSE IS ERROR AT CODE ${response.status}`)
        }
        return response.json();
      })
      .then(result => {
        setFilmItem(result)
      })
  }, [filmsID])
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
                <img src={`.${filmItem.imgVd}`} alt=""></img>
                <div className="icon-wrapper" onClick={() => setShow(true)}>
                  <PlayCircleFilledWhiteIcon className="icon_play"></PlayCircleFilledWhiteIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShow && <ModalFilmCase filmItem={filmItem} setShow={setShow} />}
    </div >
  );
}
