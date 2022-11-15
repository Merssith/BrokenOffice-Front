import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Link } from "@mui/material";

const Login = () => {
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
  };

  return (
    <Paper elevation={10} sx={{ width: "80%" }}>
      <Typography mt="10px" mb="30px" align="center" variant="h5">
        Login
      </Typography>

      <TextField
        sx={{ marginTop: "15px" }}
        label="E-mail"
        type="text"
        placeholder="Enter E-Mail"
        fullWidth
        required
        onChange={emailOnChange}
      />

      <TextField
        sx={{ marginTop: "15px" }}
        label="Password"
        placeholder="Enter password"
        type="password"
        fullWidth
        required
        onChange={passwordOnChange}
      />

      <Button
        sx={{ marginTop: "20px" }}
        type="submit"
        color="primary"
        variant="contained"
        fullWidth
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
        sx={{ marginTop: "20px" }}
        type="button"
        variant="contained"
        href="/register"
        fullWidth
      >
        Register
      </Button>
    </Paper>
  );
};

export default Login;
