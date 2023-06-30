// import logo from './logo.svg';
import "./App.css";
import Navigation from "./Component/Nav/Navigation";
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./Component/Details/Details";
import Header from "./Component/Header/Header";
import ScrollToTop from "react-scroll-to-top";
import Admin from "./Component/Admin/Admin";
import SpeedDialAdmin from "./Component/Admin/SpeedDialAdmin";
import Create from './Component/Admin/Create';
import { Backdrop, Box, CircularProgress } from "@mui/material";
import Error from "./Component/404Error/Error";
import FunctionContext from "./Component/FunctionContext/FunctionContext";
import AuthContext from "./Component/AuthContext/AuthContext";
import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"

function App() {


  //import functionContext contains all logical CRUD function
  const functionContext = useContext(FunctionContext).value
  const account = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(true)
  const [films, setFilm] = useState([]);

  const [appBack, setAppback] = useState({});
  const [contBack, setContBack] = useState({});


  // useEffect(() => {
  //   const initTheme = () => {
  //     setAppback(value.themeApp);
  //     setContBack(value.themeCont);
  //   }
  //   initTheme()
  // }, [value.dark])

  function getAllAvailableFilm() {
    fetch(`${functionContext.baseURL}?display=true`)
      .then(res => {
        if (!res.ok) {
          return new Error(`HTTP error has occured at: ${res.status}`)
        } return res.json()
      }).then(result => {
        setFilm(result)
        // preventUnAuthentication();
        setIsLoading(false)
      }
      )
  }

  useEffect(() => {
    getAllAvailableFilm();
  }, [functionContext.reload])

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {!isLoading &&
        <div
          className="App"
          style={{ backgroundColor: "rgb(179,179,179)", color: appBack.color }}
        >

          <div className="wrapper">
            <div
              className="container"
              style={{ backgroundColor: "#ecececec" }}
            >
              <Header>
                <Navigation />
              </Header>
              <div className="wrapper-body">
                <Routes>
                  <Route path="/" element={<Main films={films} />}></Route>
                  <Route path="detail/" element={<Details />}>
                    <Route path=":id" element={<Details />} />
                  </Route>
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  {account.value.isAdmin === false && <>
                    <Route path="/admin" element={<Error />}></Route>
                    <Route path='/add' element={<Error />}></Route>
                  </>
                  }
                  {account.value.isAdmin === true && <>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path='/add' element={<Create />}></Route>
                  </>
                  }
                </Routes>
              </div>
              <div className="scrollTop">
                <ScrollToTop smooth />
              </div>
              {account.value.isAdmin &&
                <>
                  <Box
                    sx={{
                      position: 'fixed',
                      top: '45%',
                      right: '4.15%',
                    }}
                  >
                    <SpeedDialAdmin />
                  </Box>
                </>
              }

              <Footer />
            </div>
          </div>
        </div >
      }
    </>

  );
}

export default App;
