import React from "react";
import { Button, Paper, Grid, Typography } from "@mui/material";
import avatar from "../utils/avatar.png";

const Profile = () => {
  return (
    <>
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
        <Grid
          sx={{
            width: "60%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Grid>
            <img src={avatar} />
          </Grid>
          <Grid>
            <Typography mt="10px" mb="30px" align="center" variant="h4">
              Name Lastname
            </Typography>
          </Grid>
        </Grid>
        <Paper
          sx={{
            width: "70%",
            maxWidth: "450px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
            padding: "20px",
          }}
        >
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Glober ID : ID
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Email : EMAIL
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Name : NOMBRE
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Lastname : APELLIDO
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Location : GEOLOC
          </Typography>
        </Paper>
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#BFD732",
            borderRadius: "20px",
            width: "30%",
          }}
          type="submit"
          color="primary"
          variant="contained"
          // href="/"
        >
          Log out
        </Button>
      </Grid>
    </>
  );
};

export default Profile;
