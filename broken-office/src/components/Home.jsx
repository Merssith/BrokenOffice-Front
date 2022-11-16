import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Button, Grid, Paper, Typography } from "@mui/material";

const handleLoginBtn = (e) => {
  e.preventDefault();
};
const handleRegisterBtn = (e) => {
  e.preventDefault();
};

const isLogged = true;

const Home = () => {
  return (
    <>
      {isLogged === false ? (
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
          <Typography mt="10px" mb="30px" align="center" variant="h6">
            Welcome USER
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
            New Ticket
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
            href="/my-tickets"
          >
            My Tickets
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
            href="/profile"
          >
            Profile
          </Button>
        </Grid>
      )}
    </>
  );
};

export default Home;
