import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  FormHelperText,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../store/users";
import { isEmail, isValidPassword } from "../utils/validation";

const ButtonGeneric = {
  margin: "2rem",
  color: "#444444",
  width: "8rem",
  transform: "scale(1.2)",
  backgroundColor: "#BFD732",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#BFD732",
  },
  "&:active": {
    color: "white",
  },
};

const Login = () => {
  const navigate = useNavigate();
  ///// Redux
  const dispatch = useDispatch();
  ////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);

  const emailOnChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    isEmail(emailInput) ? setIsValidEmail(true) : setIsValidEmail(false);
  };
  const passwordOnChange = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    isValidPassword(passwordInput)
      ? setIsValidPass(true)
      : setIsValidPass(false);
  };
  const handleLogin = (e) => {
    if (isValidEmail && isValidPass) {
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
          // console.log("LOGUEO EXITOSO!");
          navigate("/");
        })
        .catch((err) => {
          // console.log("ERROR!");
        });
    } else {
      alert("The data entered is not correct");
    }
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
      {isValidEmail ? null : (
        <FormHelperText error>Invalid email address</FormHelperText>
      )}
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        label="Password"
        placeholder="Enter password"
        type="password"
        fullWidth
        required
        onChange={passwordOnChange}
      />
      {isValidPass ? null : (
        <FormHelperText error>
          It must be at least 6 characters
          <br /> one uppercase, one lowercase,
          <br />a number and a special character
        </FormHelperText>
      )}
      <Button
        sx={ButtonGeneric}
        type="submit"
        color="primary"
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>
      <Typography
        sx={{ fontSize: "small ", textAlign: "center", marginTop: "5px" }}
      >
        <Link href="#">Forgot your password?</Link>
      </Typography>
      <Typography
        sx={{ fontSize: "medium", textAlign: "center", marginTop: "25px" }}
      >
        Not registered?
      </Typography>
      <Button
        sx={ButtonGeneric}
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
