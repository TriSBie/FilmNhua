import React, { useEffect } from "react";
import ListOfFilmsPresentation from "../ListOfFilms/ListOfFilmsPresentation";
import BodyContent from "../BodyContent/BodyContent";
import { useState } from "react";

export default function Main({ films }) {

  const [sliderFilm, setSliderFilm] = useState([]);
  const [hotFilm, setHotFilm] = useState([]);
  const [usualFilm, setUsualFilm] = useState([]);
  const [newUpdatedFilm, setNewUpdatedFilm] = useState([]);

  const initFilmWithFeatures = (films) => {
    films.map((film) => {
      if (film.feature['isNewUpdate']) {
        setNewUpdatedFilm(newUpdatedFilm => [...newUpdatedFilm, film])
      }
      if (film.feature['isHot']) {
        setHotFilm(hotFilm => [...hotFilm, film])
      }
      if (film.feature['isSlider']) {
        setSliderFilm(sliderFilm => [...sliderFilm, film])
      }
      setUsualFilm(usualFilm => [...usualFilm, film]);
    })

  }
  useEffect(() => {
    initFilmWithFeatures(films);
  }, [films]);
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
