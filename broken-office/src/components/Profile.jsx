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

  const handleEdit = () => {};

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
      <Typography mt="10px" mb="30px" align="center" variant="h5">
        Profile
      </Typography>
      <Grid
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Paper
          sx={{
            width: "60%",
            maxWidth: "300px",
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
                  maxWidth: "60%",
                }}
                src={user.avatar}
              />
            </Grid>
            <Grid>
              <Typography sx={{ margin: "auto" }} variant="h6">
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
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#BFD732",
                  borderRadius: "20px",
                  width: "30%",
                }}
                type="submit"
                color="primary"
                variant="contained"
                onClick={handleEdit}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#BFD732",
            borderRadius: "20px",
            width: "30%",
            maxWidth: "200px",
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
