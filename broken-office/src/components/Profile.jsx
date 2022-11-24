import React from "react";

import { Button, Paper, Grid, Typography } from "@mui/material";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../store/users";

import ModalProfile from "./ModalProfile";
import { setModalBool } from "../store/modalBool";
import EditIcon from "@mui/icons-material/Edit";
const ButtonGeneric = {
  margin: "2rem",
  color: "#444444",
  width: "auto",
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

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const modalBool = useSelector((state) => state.modalBool);

  //////////////////HANDLES
  const handleBool = () => {
    if (modalBool === true) {
      dispatch(setModalBool(false));
    } else {
      dispatch(setModalBool(true));
    }
  };

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
      .then(() => dispatch(setUser({})))
      .then(() => navigate("/"));
  };

  ////////////////////////////////////

  return (
    <>
      <Typography mt="10px" mb="30px" align="center" variant="h5">
        Profile
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
        ></Grid>
        <Paper
          sx={{
            width: "60vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            margin: "auto",
          }}
        >
          <Grid
            sx={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Grid>
              <img
                style={{
                  maxWidth: "20vw",
                  borderRadius: "20%",
                  border: "1px solid black",
                }}
                src={user.avatar}
                alt="User avatar"
              />
            </Grid>
            <Grid>
              <Typography
                sx={{ marginLeft: "1rem", textAlign: "center" }}
                variant="h6"
              >
                {user.name} {user.lastName}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              width: "100%",
              maxWidth: "450px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography mt="10px">Glober ID : {user.id}</Typography>
            <Typography mt="10px">Email : {user.email}</Typography>
            <Typography mt="10px">
              Telephone number : {user.telephone}
            </Typography>
            <Typography mt="10px">Location : {user.geoCords}</Typography>
            <Grid
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Button
                sx={ButtonGeneric}
                type="submit"
                color="primary"
                variant="contained"
                onClick={handleBool}
              >
                Edit
                <div style={{ width: "0.2rem" }}></div>
                <EditIcon sx={{ fontSize: "1rem" }} />
              </Button>
              <ModalProfile />
            </Grid>
          </Grid>
        </Paper>
        <Button
          sx={ButtonGeneric}
          type="submit"
          color="primary"
          variant="contained"
          onClick={handleLogOut}
        >
          Log out
        </Button>
      </Grid>
      <div style={{ height: "10vh" }}></div>
    </>
  );
};

export default Profile;
