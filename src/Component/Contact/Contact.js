import React, { useRef, useState } from 'react';
import Box from "@mui/material/Box";

import InputAdornment from "@mui/material/InputAdornment";
import emailjs from '@emailjs/browser';

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import "./contact.css";
import { Alert, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';



export default function Contact() {
  const [sendStatus, setSendStatus] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6vb8d6r', 'template_i1fwh51', form.current, 'HNJU1dXKT1gFLA0eP')
      .then((result) => {
        setSendStatus(true)
        console.log(result.text);
      }, (error) => {
        setSendStatus(false)
        console.log(error.text);
      });
  };
  return (
    <div className="row contact">
      <div className="col content-contact-left">
        <Box
          sx={{ "& > :not(style)": { m: 1 } }}
        >
          <h1
            style={{
              backgroundColor: "#fff",
              color: "#333",
              textAlign: "center",
            }}
          >
            GET IN TOUCH
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <FormControl variant="standard">

              <TextField
                id="input-with-icon-textfield"
                label="Your name"
                name="user_name"
                type='text'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <br></br>
              <TextField
                id="input-with-icon-textfield"
                label="Your email"
                type='email'
                name="user_email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <br></br>
              <TextField
                id="input-with-icon-textfield"
                label="Your message"
                name="message"
                multiline
                rows={4}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <br></br>
              <Button
                variant="contained"
                type="submit"
                value="Send"
              >
                Submit
              </Button>
            </FormControl>
          </form>

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
      {sendStatus !== false && <Alert
        variant='filled'

        sx={{
        }}
        severity="success">Your message sent successfully</Alert>}
      {/* <div className="col content-right">}
      
        <div className="contact-img"></div>
      </div> */}
    </div>
  );
}
