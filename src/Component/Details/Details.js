import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalDetail from "../Modal/ModalFilmCase";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
import "./styleDetail.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { Backdrop, Box, Button, CircularProgress, CssBaseline, Typography } from "@mui/material";
import { Container } from "postcss";
export default function Details({ listFilm }) {
  const [isLoading, setIsLoading] = useState(true)

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
        setIsLoading(false)
      })
    console.log("First here")
  }, [filmsID])
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {isLoading && <div className="row" style={{
        minHeight: '50vh'
      }}>
      </div>}
      {!isLoading && filmItem.display === false &&
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} textAlign={'center'} alignContent={'center'}>
          <Typography
            variant="h4"
            component={'h5'}
          >
            Film with ID: {filmsID.id} is does not exists at current
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png)`,
              position: 'relative',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%'
            }}
          >
            {/* <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png">
            </img> */}
            <Link to={"/"}>
              <Button sx={{
                position: 'absolute',
                top: '40%',
                right: '38%'
              }}
                size="large"
                variant="contained"
                color="primary"
              >
                Go home
              </Button>
            </Link>
          </Box>
        </Box>
      }
      {
        !isLoading && filmItem.display !== false &&
        <div className="row">
          <div className="box-film">
            <div className="row">
              <h3>{filmItem.title} </h3>
              <div className="wrappedDetail row">
                <div className="col-3">
                  <div className="content-left">
                    <div className="row">
                      <div className="col box-content-left">
                        <div className="card-img-cover">
                          <img src={`${filmItem.img}`}></img>
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
                      <img src={`${filmItem.imgVD}`} alt=""></img>
                      <div className="icon-wrapper" onClick={() => setShow(true)}>
                        <PlayCircleFilledWhiteIcon className="icon_play"></PlayCircleFilledWhiteIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isShow && <ModalDetail filmItem={filmItem} setShow={setShow} />}
        </div >
      }
    </>
  );
}
