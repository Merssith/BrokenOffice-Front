import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
          <Grid></Grid>
          <Typography mt="10px" mb="30px" align="center" variant="h6">
            Welcome {user.name}
          </Typography>
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
            href="/new-ticket"
          >
            <Link style={{ textDecoration: "none" }} to="/new-ticket">
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
            <Link style={{ textDecoration: "none" }} to="/my-tickets">
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
            <Link style={{ textDecoration: "none" }} to="/user/profile">
              Profile
            </Link>
          </Button>
        </Grid>
      )}
    </>
  );
};
export default Home;
