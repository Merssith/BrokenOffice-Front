import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import globant from "../utils/globant.png";
import "../styles/global.css";
const handleLoginBtn = (e) => {
  e.preventDefault();
};
const handleRegisterBtn = (e) => {
  e.preventDefault();
};
const Home = () => {
  const user = useSelector((state) => state.user);
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
            sx={{
              backgroundColor: "#BFD732",
              borderRadius: "20px",
              width: "30%",
            }}
            type="submit"
            color="primary"
            variant="contained"
            href="/login"
          >
            Login
          </Button>
          <Typography mt="10px" mb="10px" align="center" variant="h6">
            or
          </Typography>
          <Button
            sx={{
              backgroundColor: "#BFD732",
              borderRadius: "20px",
              width: "30%",
            }}
            type="submit"
            color="primary"
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
            sx={{
              marginTop: "20px",
              backgroundColor: "#BFD732",
              borderRadius: "20px",
              width: "40%",
            }}
            type="submit"
            color="primary"
            variant="contained"
          >
            <Link
              style={{ color: "#444444", textDecoration: "none" }}
              to="/ticket/create"
            >
              New Ticket
            </Link>
          </Button>
          <Button
            sx={{
              marginTop: "20px",
              backgroundColor: "#BFD732",
              borderRadius: "20px",
              width: "40%",
            }}
            type="submit"
            color="primary"
            variant="contained"
          >
            <Link
              style={{ color: "#444444", textDecoration: "none" }}
              to="/ticket/history"
            >
              My Tickets
            </Link>
          </Button>
          <Button
            sx={{
              marginTop: "20px",
              backgroundColor: "#BFD732",
              borderRadius: "20px",
              width: "40%",
            }}
            type="submit"
            color="primary"
            variant="contained"
            // href="/user/profile"
          >
            <Link
              style={{ color: "#444444", textDecoration: "none" }}
              to="/user/profile"
            >
              Profile
            </Link>
          </Button>
        </Grid>
      )}
      <Outlet />
    </>
  );
};
export default Home;
