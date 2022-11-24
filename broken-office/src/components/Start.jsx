import React, { useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import globant from "../utils/globant.png";
import "../styles/global.css";

const Start = () => {
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
  );
};

export default Start;
