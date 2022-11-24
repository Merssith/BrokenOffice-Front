import React from "react";
import { Button, Grid, Paper, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import globant from "../utils/globant.png";
import "../styles/global.css";

const handleLoginBtn = (e) => {
  e.preventDefault();
};
const handleRegisterBtn = (e) => {
  e.preventDefault();
};

const ButtonGeneric = {
  margin: "2rem",
  color: "#444444",
  width: "8rem",
  transform: "scale(1.3)",
  backgroundColor: "#BFD732",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#BFD732",
  },
  "&:active": {
    color: "white",
  },
};

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <>
      {user.email === null ? (
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
          <Typography mt="10px" mb="30px" align="center" variant="h4">
            Welcome to BrokenOffice
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h6">
            In first place, please login
          </Typography>
          <Button
            sx={ButtonGeneric}
            type="submit"
            variant="contained"
            href="/login"
          >
            Login
          </Button>
          <Typography mt="10px" mb="10px" align="center" variant="h6">
            or
          </Typography>
          <Button
            sx={ButtonGeneric}
            type="submit"
            variant="contained"
            href="/register"
          >
            Register
          </Button>
        </Grid>
      ) : (
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
            Welcome, {user.name}
          </Typography>

          <img style={{ width: "75%", maxWidth: "400px" }} src={globant} />
          <Button
            sx={ButtonGeneric}
            variant="contained"
            onClick={() => navigate("/ticket/create")}
          >
            New Ticket
          </Button>
          <Button
            sx={ButtonGeneric}
            type="submit"
            color="primary"
            variant="contained"
            onClick={() => navigate("/ticket/history")}
          >
            My Tickets
          </Button>
          <Button
            sx={ButtonGeneric}
            type="submit"
            color="primary"
            variant="contained"
            onClick={() => navigate("/user/profile")}
          >
            Profile
          </Button>
        </Grid>
      )}
      <Outlet />
    </>
  );
};
export default Home;
