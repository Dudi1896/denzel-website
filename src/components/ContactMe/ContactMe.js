import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledError,
  StyledButton,
} from "./ContactMe.Styled";

const initalState = {
  name: "",
  email: "",
  message: "",
};

const ContactMe = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, [inputName]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);
  
    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
  
    setError("");
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isValidEmail = regex.test(state.email);
    if (!isValidEmail) {
      setError("Invalid email address");
      return;
    }
  
    // Send the email using EmailJS
    const serviceId = "service_a3b80bf";
    const templateId = "template_nwa9d6y";
    const publicKey = "11juGAmXIXqvUuWEC";
  
    emailjs.send(serviceId, templateId, state, publicKey).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully, Thank you!")
        setState(initalState);
      },
      (error) => {
        console.log("Failed to send email.", error);
        setError("Failed to send email.");
      });
  };
  

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactMe;
