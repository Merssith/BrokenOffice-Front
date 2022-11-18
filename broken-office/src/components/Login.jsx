import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../store/users";

const Login = () => {
  const navigate = useNavigate();
  ///// Redux
  const dispatch = useDispatch();
  ////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault(); //axios.post ("/login")
    axios
      .post(
        "/api/users/login",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((user) => {
        dispatch(setUser(user.data));
        console.log("LOGUEO EXITOSO!");
        navigate("/");
      })
      .catch((err) => {
        console.log("ERROR!");
      });
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
        Login
      </Typography>
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        label="E-mail"
        type="text"
        placeholder="Enter E-Mail"
        fullWidth
        required
        onChange={emailOnChange}
      />
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        label="Password"
        placeholder="Enter password"
        type="password"
        fullWidth
        required
        onChange={passwordOnChange}
      />
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "#BFD732",
          borderRadius: "20px",
          width: "70%",
        }}
        type="submit"
        color="primary"
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>
      <Typography sx={{ textAlign: "center", marginTop: "5px" }}>
        <Link href="#">Forgot your password?</Link>
      </Typography>
      <Typography sx={{ textAlign: "center", marginTop: "30px" }}>
        Not registered?
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
        href="/register"
        fullWidth
      >
        Register
      </Button>
    </Grid>
  );
};
export default Login;
