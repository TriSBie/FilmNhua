import React, { useEffect } from "react";
import { ListOfFilms } from "../../Shared/ListOfFilms";
import ListOfFilmsPresentation from "../ListOfFilms/ListOfFilmsPresentation";
import BodyContent from "../BodyContent/BodyContent";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Details from "../Details/Details";

export default function Main() {
  const [show, setShow] = useState(false);
  const [film, setFilm] = useState({});
  const [sliderFilm, setSliderFilm] = useState([]);
  const [hotFilm, setHotFilm] = useState([]);
  const [usualFilm, setUsualFilm] = useState([]);
  const [newUpdatedFilm, setNewUpdatedFilm] = useState([]);
  useEffect(() => {
    //get list of new films
    setHotFilm(ListOfFilms.filter((films) => films.isHot === true));

    //get list of usual films
    setNewUpdatedFilm(
      ListOfFilms.filter((films) => films.isNewUpdate === true)
    );
    setUsualFilm(ListOfFilms);
    setSliderFilm(ListOfFilms.filter((film) => film.isSlider === true));
  }, []);
  // const handleFilmClick = (filmsID) => setFilm(filmsID);
  return (
    <>
      <BodyContent sliderFilm={sliderFilm} />
      <ListOfFilmsPresentation
        hotFilm={hotFilm}
        newUpdatedFilm={newUpdatedFilm}
        listFilms={usualFilm}
      />
    </>
  );
}
