import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [globerId, setGloberId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [geolocation, setGeolocation] = useState("");

  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const lastNameOnChange = (event) => {
    setLastName(event.target.value);
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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === passwordTwo) {
      axios
        .post("/api/users/", {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then((res) => console.log(res));
      navigate("/login");
    } else alert("contraseñas no coinciden");
  };

  return (
    <Grid
      sx={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "30px",
        margin: "auto",
      }}
    >
      <Typography mt="10px" mb="30px" align="center" variant="h5">
        Register
      </Typography>
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={name}
        id="input-name"
        label="Name"
        type="text"
        required
        onChange={nameOnChange}
      />
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={lastName}
        id="input-lastname"
        label="Lastname"
        type="text"
        required
        onChange={lastNameOnChange}
      />
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={globerId}
        id="input-globerId"
        label="Glober ID"
        type="text"
        required
        onChange={globerIdOnChange}
      />
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={email}
        id="outlined-basic-email"
        label="Email"
        type="text"
        required
        onChange={emailOnChange}
      />
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={password}
        id="outlined-basic-password"
        label="Password"
        type="password"
        required
        onChange={passwordOnChange}
      />
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={passwordTwo}
        id="outlined-basic-password"
        label="Confirm Password"
        type="password"
        required
        onChange={passwordTwoOnChange}
      />
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "#BFD732",
          borderRadius: "20px",
          width: "70%",
        }}
        onClick={handleGeolocation}
        type="button"
        variant="contained"
        component="label"
        fullWidth
      >
        Geolocalize me
      </Button>
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "#BFD732",
          borderRadius: "20px",
          width: "70%",
        }}
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
        sx={{
          marginTop: "20px",
          backgroundColor: "#BFD732",
          borderRadius: "20px",
          width: "70%",
        }}
        type="button"
        variant="contained"
        href="/login"
        fullWidth
      >
        Login
      </Button>
    </Grid>
  );
};

export default Register;
