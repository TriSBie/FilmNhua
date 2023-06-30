import React, { useContext, useEffect, useMemo } from "react";
import ListOfFilmsPresentation from "../ListOfFilms/ListOfFilmsPresentation";
import BodyContent from "../BodyContent/BodyContent";
import { useState } from "react";
import FunctionContext from "../FunctionContext/FunctionContext";
import Pagination from '@mui/material/Pagination';
import { Divider, List, ListItem, Stack } from "@mui/material";
import usePagination from "./Pagination/Pagination";
import { South, Tag } from "@mui/icons-material";
import { Link } from "react-router-dom";




export default function Main({ films }) {
  const functionContext = useContext(FunctionContext)

  // const [sliderFilm, setSliderFilm] = useState([]);
  // const [hotFilm, setHotFilm] = useState([]);
  // const [usualFilm, setUsualFilm] = useState([]);
  // const [newUpdatedFilm, setNewUpdatedFilm] = useState([]);

  //set number index of page - default = 1
  const DATA_PERPAGE = 12; //set data display in per page
  const DATA = usePagination(films, DATA_PERPAGE); //get DEFAULT
  const [pageApi, setPageAPI] = useState(DATA.currentPage);
  const count = Math.ceil(films.length / DATA_PERPAGE) //set available page are used
  //inital data from pagination component ~ provides pagination functionality

  const handleChange = (e, p) => {
    sessionStorage.setItem("page", p);
    setPageAPI(p);
    DATA.jump(p); //SET NEW PAGE
  }

  useEffect(() => {
  }, [pageApi])
  //init film data when reloading at first stage - re-renders
  // const initFilmWithFeatures = (films) => {
  //   let sliderFilm = []
  //   let hotFilm = []
  //   let newUpdatedFilm = []
  //   let usualFilm = []
  //   films.map((film) => {
  //     if (film.feature['isNewUpdate']) {
  //       newUpdatedFilm.push(film)
  //     }
  //     if (film.feature['isHot']) {
  //       hotFilm.push(film)
  //     }
  //     if (film.feature['isSlider']) {
  //       sliderFilm.push(film)
  //     }
  //     usualFilm.push(film)
  //   })
  //   setSliderFilm(sliderFilm)
  //   setHotFilm(hotFilm)
  //   setNewUpdatedFilm(newUpdatedFilm)
  //   setUsualFilm(usualFilm)
  // }

  // useEffect(() => {
  //   initFilmWithFeatures(films);
  // }, [functionContext.reload]);
  // const handleFilmClick = (filmsID) => setFilm(filmsID);



  return (
    <>
      <BodyContent listFilms={films} />
      <ListOfFilmsPresentation
        listFilms={films}
      />
      <Stack textAlign={'center'} spacing={2} justifyContent={'center'} alignItems={'center'}>
        <div className="row listFilm">
          <div className="row">
            <h3>List of Films</h3>
          </div>
          {DATA.currentData().map((listFilm, index) => (
            <div
              key={listFilm.id}
              className="column col-md-4 col-sm-4 col-md-3 col-xl-2 p-2"
            >
              <Link to={`detail/${listFilm.id}`} key={index} listFilm={films}>
                <div
                  className="card"
                  style={{ minHeight: "386px" }}
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
        <Pagination
          count={count}
          page={pageApi}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
