import React from "react";
import { Button, Paper, Grid, Typography } from "@mui/material";
import axios from "axios";
import avatar from "../utils/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../store/users";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleLogOut = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/users/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() =>
        dispatch(
          setUser({
            fullname: null,
            email: null,
          })
        )
      );
    navigate("/");
  };

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
            <img style={{ maxWidth: "25vw" }} src={user.avatar} />
          </Grid>
          <Grid>
            <Typography mt="10px" mb="30px" align="center" variant="h4">
              {user.name} {user.lastName}
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
            Glober ID : {user.id}
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Email : {user.email}
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Name : {user.name}
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Lastname : {user.lastName}
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
          onClick={handleLogOut}
        >
          Log out
        </Button>
      </Grid>
    </>
  );
};

export default Profile;
