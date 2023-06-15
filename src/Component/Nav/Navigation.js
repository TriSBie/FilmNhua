import React, {useContext } from "react";
import "./styleHeader.css";
import { ThemeContext } from "../ThemeContext/ThemeContext";
// Import MUI Switch button
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MovieSharpIcon from "@mui/icons-material/MovieSharp";

const label = { inputProps: { "aria-label": "Color switch demo" } };

const pages = ["Home", "About", "Contact"];
const settings = ["Profile", "Account", "Logout"];

export default function Navigation() {
  const value = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    // let link;
    // if (page === "Home") {
    //   link = "/";
    // } else if (page === "About") {
    //   link = "/about";
    // } else if (page === "Contact") {
    //   link = "/contact";
    // }
    // setAnchorElNav(link);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function getAccordingActionURL(page) {
    if (page === "Home") {
      return "/";
    } else if (page === "About") {
      return "/about";
    } else if (page === "Contact") {
      return "/contact";
    }
  }
  return (
    <AppBar position="static" sx={{ borderRadius: "0 0 30px 30px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieSharpIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "23px",
              }}
            >
              FilmNhua
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MovieSharpIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "25px",
            }}
          >
            FilmNhua
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={getAccordingActionURL(page)} key={page}>
                <Button
                  key={page}
                  // onClick={() => handleCloseNavMenu(page)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "16px",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              marginRight: "20px",
            }}
          >
            Theme:
            <Switch
              {...label}
              defaultChecked
              color="default"
              onChange={value.toggle}
            />
            <b>{value.dark ? "Light" : "Dark"}</b>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

  /*
   <div className="navigation-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-collapse switch-button-mode">
            Theme:
            <Switch
              {...label}
              defaultChecked
              color="default"
              onChange={value.toggle}
            />
            <b>{value.dark ? "Light" : "Dark"}</b>
          </div>
      
        </nav>
      </div>
  */
}
