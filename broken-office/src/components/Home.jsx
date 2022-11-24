import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import globant from "../utils/globant.png";
import "../styles/global.css";
import useGeolocation from "../hooks/useGeolocation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/users";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { location, place } = useGeolocation();
  console.log(user);
  useEffect(() => {
    axios
      .put(`/api/users/update/${user.id}`, {
        geoCords: location.coordinates.lat + "," + location.coordinates.lng,
        place: place,
      })
      .then((res) => dispatch(setUser(res.data)));
  }, [place]);

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
      <Outlet />
    </>
  );
};
export default Home;
