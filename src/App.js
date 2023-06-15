// import logo from './logo.svg';
import "./App.css";

import Navigation from "./Component/Nav/Navigation";
// import PlayersMap from './Component/PlayersMap';
import Footer from "./Component/Footer/Footer";
import Main from "./Component/Main/Main";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Component/ThemeContext/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Details from "./Component/Details/Details";
import Header from "./Component/Header/Header";
import Contact from "./Component/Contact/Contact";
import About from "./Component/About/About";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const value = useContext(ThemeContext);
  const [appBack, setAppback] = useState({});
  const [contBack, setContBack] = useState({});
  useEffect(() => {
    setAppback(value.themeApp);
    setContBack(value.themeCont);
  }, [value.dark]);
  return (
    <div
      className="App"
      style={{ backgroundColor: appBack.backgroundColor, color: appBack.color }}
    >
      <div className="wrapper">
        <div
          className="container"
          style={{ backgroundColor: contBack.backgroundColor }}
        >
          <Header>
            <Navigation />
          </Header>
          <div className="wrapper-body">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="detail/" element={<Details />}>
                <Route path=":id" element={<Details />} />
              </Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
          <div className="scrollTop">
            <ScrollToTop smooth />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
