import React from "react";
import Box from "@mui/material/Box";

import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import "./contact.css";

export default function Contact() {
  return (
    <div className="row contact">
      <div className="col content-contact-left">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <h1
            style={{
              backgroundColor: "#fff",
              color: "#333",
              textAlign: "center",
            }}
          >
            GET IN TOUCH
          </h1>
          <FormControl variant="standard">
            <TextField
              id="input-with-icon-textfield"
              label="Your name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <br></br>
            <TextField
              id="input-with-icon-textfield"
              label="Your email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <br></br>
            <TextField
              id="input-with-icon-textfield"
              label="Your phone"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <br></br>
            <TextField
              id="input-with-icon-textfield"
              label="Your address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <br></br>
            <Button variant="outlined">Submit</Button>
          </FormControl>
          <h1
            style={{
              backgroundColor: "#fff",
              color: "#333",
              textAlign: "center",
            }}
          >
            GET IN TOUCH
          </h1>
        </Box>
      </div>
      {/* <div className="col content-right">
        <div className="contact-img"></div>
      </div> */}
    </div>
  );
}
