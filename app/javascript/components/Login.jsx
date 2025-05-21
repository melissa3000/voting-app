import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipcode, setZipcode] = useState("");

  const createSesssion = async (event) => {
    try {
      event.preventDefault();
      console.log("creating user session for email: ", email)
      const data = {
        "email": email,
      }
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        credentials: "same-origin",
        body: JSON.stringify(data),
      });
      if (response.url) {
        window.location = response.url;
      }
    } catch(e) {
      console.log("=======oh no! session not created", e)
     // Reset form fields so the user can try again - also should include info for the user
       setEmail("");
       setPassword("");
       setZipcode("")
    }
  }

  return (
    <Box component="form" onSubmit={createSesssion} sx={{display: "flex", justifyContent: "center"}}>
      <FormControl>
        <FormLabel id="login-label">Sign in to vote</FormLabel>
        <label htmlFor="email-input">Email</label>
        <input
          name="email"
          label="Email"
          type="text"
          id="email-input"
          className="login-input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password-input">Password</label>
        <input
          name="password"
          className="login-input-field"
          type="password"
          id="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="zip-field-input">Zip code</label>
        <input
          name="Zip code"
          className="login-input-field"
          type="number"
          id="zip-field-input"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          required
        />
        <button
          id="submit-button"
          className="submit-button-class"
          type="submit"
        >
        Sign in
       </button>
      </FormControl>
    </Box>
  );
};

export default Login;
