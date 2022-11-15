import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [globerId, setGloberId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [geolocation, setGeolocation] = useState("");

  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const surnameOnChange = (event) => {
    setSurname(event.target.value);
  };
  const globerIdOnChange = (event) => {
    setGloberId(event.target.value);
  };
  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };
  const passwordTwoOnChange = (event) => {
    setPasswordTwo(event.target.value);
  };
  const handleGeolocation = (event) => {
    event.preventDefault(); // Capturar localizacion -> setGeolocation();
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // axios.post("/register")
  };

  return (
    <Paper elevation={10} sx={{ width: "80%" }}>
      <Typography mt="10px" mb="30px" align="center" variant="h5">
        Register
      </Typography>
      <TextField
        sx={{ marginTop: "15px" }}
        value={name}
        id="input-name"
        label="Name"
        type="text"
        fullWidth
        required
        onChange={nameOnChange}
      />
      <TextField
        sx={{ marginTop: "15px" }}
        value={surname}
        id="input-surname"
        label="Surname"
        type="text"
        fullWidth
        required
        onChange={surnameOnChange}
      />
      <TextField
        sx={{ marginTop: "15px" }}
        value={globerId}
        id="input-globerId"
        label="Glober ID"
        type="text"
        fullWidth
        required
        onChange={globerIdOnChange}
      />
      <TextField
        sx={{ marginTop: "15px" }}
        value={email}
        id="outlined-basic-email"
        label="Email"
        type="text"
        fullWidth
        required
        onChange={emailOnChange}
      />
      <TextField
        sx={{ marginTop: "15px" }}
        value={password}
        id="outlined-basic-password"
        label="Password"
        type="password"
        fullWidth
        required
        onChange={passwordOnChange}
      />
      <TextField
        sx={{ marginTop: "15px" }}
        value={password}
        id="outlined-basic-password"
        label="Confirm Password"
        type="password"
        fullWidth
        required
        onChange={passwordOnChange}
      />
      <Button
        sx={{ marginTop: "20px" }}
        onClick={handleGeolocation}
        type="button"
        variant="contained"
        component="label"
        fullWidth
      >
        Geolocalize me
      </Button>
      <Button
        sx={{ marginTop: "20px" }}
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        component="label"
        fullWidth
      >
        Register
      </Button>
      <Typography sx={{ textAlign: "center", marginTop: "20px" }}>
        Alredy registred?
      </Typography>
      <Button
        sx={{ marginTop: "20px" }}
        type="button"
        variant="contained"
        href="/login"
        fullWidth
      >
        Login
      </Button>
    </Paper>
  );
};

export default Register;
