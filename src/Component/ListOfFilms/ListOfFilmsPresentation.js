import React from "react";
import "./styleListFilm.css";
import { Link } from "react-router-dom";
//col-6 col-sm-4 col-md-3 col-xl-2
import Slider from "react-slick";

export default function ListOfFilmsPresentation({
  hotFilm,
  newUpdatedFilm,
  listFilms,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
    <div className="row container-film">
      <div className="row hotFilmRelease">
        <h3> Hotest Film </h3>
        <Slider {...settings}>
          {hotFilm.map((film) => (
            <Link to={`detail/${film.id}`} key={film.id}>
              <div className="card-cover card" key={film.id} title={film.title}>
                <div
                  className="player-btn"
                >
                  <i className="fa-solid fa-play"></i>
                </div>
                <div className="wrapper-film-img">
                  <img src={film.img} alt={film.title}></img>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div className="row newUpdatedFilm">
        <h3> New update Film </h3>
        <Slider {...settings}>
          {newUpdatedFilm.map((film) => (
            <Link to={`detail/${film.id}`} key={film.id}>
              <div className="card-cover card" key={film.id}>
                <div
                  className="player-btn"
                >
                  <i className="fa-solid fa-play"></i>
                </div>
                <img src={film.img} alt={film.title}></img>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div className="row listFilm">
        <div className="row">
          <h3>List of Films</h3>
        </div>
        {listFilms.map((listFilm) => (
          <div
            key={listFilm.id}
            className="column col-md-4 col-sm-4 col-md-3 col-xl-2"
          >
            <Link to={`detail/${listFilm.id}`} key={listFilm.id}>
              <div
                className="card"
                style={{ minHeight: "380px" }}
                title={listFilm.title}
              >
                <div className="card-cover-top">
                  <img className="card-img-top" src={listFilm.img} alt="" />
                </div>
                <div className="card-body">
                  <h3 style={{ padding: "0" }} className="card-title">
                    {`${listFilm.title} - ${listFilm.year}`}
                  </h3>
                  <p className="card-text">{listFilm.nation}</p>
                </div>
                <div className="player-btn">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
