import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import "../../index.css";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateName = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setName(value);
    if (name === "name") {
      if (value === "") {
        setName("");
        setErrorMessage(`Please enter your name.`);
      }
    }
    if (value.length > 0) {
      setErrorMessage(``);
    }
  };

  const validateEmail = (e) => {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;
    setEmail(value);
    if (name === "email") {
      if (value === "") {
        setEmail("");
        setErrorMessage(
          `Please enter a valid email address.`
        );
      }
      const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      console.log(!pattern.test(value));
      if (!pattern.test(value)) {
        setErrorMessage(`Please enter a valid email`);
      } else {
        setErrorMessage("");
      }
    }
  };

  const validateMessage = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setMessage(value);
    if (name === "message") {
      if (value === "") {
        setMessage("");
        setErrorMessage(`Please enter a message.`);
      }
    }
    if (value.length > 0) {
      setErrorMessage(``);
    }
  };

  return (
    <>
      <div className="contact-form">
        <h2 className="contact-header">Contact Me</h2>
      </div>
      <form className="contact-form">
        <Stack >
          <MenuItem>
            <TextField
              defaultValue={name}
              onBlur={validateName}
              label="Name"
              name="name"
              type="text"
            />
          </MenuItem>
          <MenuItem>
            {" "}
            <TextField
            
              defaultValue={email}
              onBlur={validateEmail}
              label="Email Address"
              name="email"
              type="email"
            />
          </MenuItem>
          <MenuItem>
            <textarea
              defaultValue={message}
              onBlur={validateMessage}
              rows="15"
              cols="40"
              label="Message"
              name="message"
              type="text"
              placeholder="Type your message here!"
            />
          </MenuItem>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <MenuItem>
            <Button variant="contained" className="contact-button  pop-on-hover">Submit</Button>
          </MenuItem>
        </Stack>
      </form>
    </>
  );
}
