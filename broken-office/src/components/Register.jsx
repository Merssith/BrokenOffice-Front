import React, {  useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  FormHelperText,
  Snackbar,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import { isEmail, isValidPassword, samePassword } from "../utils/validation";

const ButtonGeneric = {
  margin: "2rem",
  color: "#444444",
  width: "auto",
  boxShadow: 4,
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

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState(""); //se puede borrar no se usa
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [areSamePass, setAreSamePass] = useState(true);
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)

  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const lastNameOnChange = (event) => {
    setLastName(event.target.value);
  };
  const emailOnChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    isEmail(emailInput) ? setIsValidEmail(true) : setIsValidEmail(false);
  };
  const passwordOnChange = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    isValidPassword(passwordInput)
      ? setIsValidPass(true)
      : setIsValidPass(false);
  };
  const passwordTwoOnChange = (event) => {
    const passwordTwoInput = event.target.value;
    setPasswordTwo(passwordTwoInput);
    samePassword(password, passwordTwoInput)
      ? setAreSamePass(true)
      : setAreSamePass(false);
  };
  const handleGeolocation = (event) => {
    event.preventDefault(); // Capturar localizacion -> setGeolocation();
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail && isValidPass && areSamePass) {
      axios
        .post("/api/users/", {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then((res) => console.log(res));
      navigate("/login");
    }
    if (!isValidEmail) {
      setMessage("Invalid email address");
    }
    if (!isValidPass) {
      setMessage("Invalid password");
    }
    if (!areSamePass) {
      setMessage("Passwords must be the same")
    }
    setOpen(true)
  };
const handleClose = (event?: React.SyntheticEvent | Event, reason?: string)=>{ if(reason === "clickaway"){return}setOpen(false)}
  return (
    <Grid
      sx={{
        width: "100%",
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
      {/* <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={globerId}
        id="input-globerId"
        label="Glober ID"
        type="text"
        required
        onChange={globerIdOnChange}
      /> */}
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={email}
        id="outlined-basic-email"
        label="Email"
        type="text"
        required
        onChange={emailOnChange}
      />
      {/* {isValidEmail ? null : (
        <FormHelperText error>Invalid email address</FormHelperText>
      )} */}

      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={password}
        id="outlined-basic-password"
        label="Password"
        type="password"
        required
        onChange={passwordOnChange}
      />
      {
        <FormHelperText >
          It must be at least 6 characters,1 uppercase, 1 lowercase, a number
          and a special character
        </FormHelperText>
      }
      <TextField
        sx={{ marginTop: "15px", width: "80%" }}
        value={passwordTwo}
        id="outlined-basic-password"
        label="Confirm Password"
        type="password"
        required
        onChange={passwordTwoOnChange}
      />
      {/* {areSamePass ? null : (
        <FormHelperText error>Passwords must be the same</FormHelperText>
      )} */}
{(name === "" || lastName === "" || email === "" || password === "" || passwordTwo === "" )?(
        <Button
        sx={ButtonGeneric}
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        component="label"
        fullWidth
        disabled
      >
        Register
      </Button>
) :
      (<><Button
        sx={ButtonGeneric}
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        component="label"
        fullWidth
      >
        Register
      </Button> <Snackbar open={open} onClose={handleClose} message={message} autoHideDuration={3000} anchorOrigin={{vertical:"top", horizontal:"left"}} ContentProps={{
    sx: {
      background: "red",
      color: "#444444"
    }
  }}/></>)}
      <Typography sx={{ textAlign: "center", marginTop: "20px" }}>
        Already registered?
      </Typography>
      <Button
        sx={ButtonGeneric}
        type="button"
        variant="contained"
        href="/login"
        fullWidth
      >
        Login
      </Button>
      <div style={{ height: "8vh" }}></div>
    </Grid>
  );
};

export default Register;
