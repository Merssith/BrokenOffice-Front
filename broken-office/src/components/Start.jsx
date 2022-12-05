import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import "../styles/global.css";

const ButtonGeneric = {
  margin: "1rem",
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
        Please login or register first
      </Typography>
      <Button
        sx={ButtonGeneric}
        type="submit"
        color="primary"
        variant="contained"
        href="/login"
      >
        Login
      </Button>
      {/* hola */}
      <Button
        sx={ButtonGeneric}
        type="submit"
        color="primary"
        variant="contained"
        href="/register"
      >
        Register
      </Button>
      <Grid sx={{ mb: "100px" }} />
    </Grid>
  );
};

export default Start;
