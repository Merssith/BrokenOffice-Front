import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Button, Grid, Paper, Typography } from "@mui/material";

const Home = () => {
  return (
    <Grid>
      <Paper
        elevation={10}
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography mt="10px" mb="30px" align="center" variant="h5">
          Welcome to BrokenOffice!
        </Typography>
        <Button>Login</Button>
        <Login />
        <Button>Register</Button>
        <Register />
        {/* <Login/> */}
        {/* <NewTicket/> */}
        {/* <Profile/> */}
      </Paper>
    </Grid>
  );
};

export default Home;
