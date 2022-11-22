import React from "react";
import { Button, Paper, Grid, Typography, IconButton } from "@mui/material";
import axios from "axios";
import avatar from "../utils/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../store/users";
import { setAvatar } from "../store/users";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const avatarForm = new FormData();

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

  const handleImage = (e) => {
    const avatar = e.target.files[0];

    avatarForm.append("avatar", avatar);

    // console.log(e.target.files[0]);

    axios({
      method: "put",
      url: `/api/users/avatar/${user.id}`,
      data: avatarForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
        dispatch(setAvatar(response.data.avatar));
      })
      .catch((err) => {
        console.log(err);
      });
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
            <img
              style={{
                maxWidth: "20vw",
                borderRadius: "20%",
                border: "2px, solid black",
              }}
              src={user.avatar}
            />
          </Grid>

          <IconButton
            sx={{
              overflow: "hidden",
              position: "absolute",
              marginRight: "5.6rem",
              marginTop: "2.5rem",
              color: "#bfd732",
            }}
          >
            <AddAPhotoIcon />
            <input
              type="file"
              style={{
                position: "absolute",
                transform: "scale(2)",
                marginLeft: "2rem",
                opacity: "0",
                cursor: "pointer",
              }}
              onChange={handleImage}
            />
          </IconButton>

          <Grid>
            <Typography mt="10px" mb="30px" align="center" variant="h5">
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
          <Typography mt="10px" mb="30px" align="center" variant="h6">
            Glober ID : {user.id}
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h6">
            Email : {user.email}
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h6">
            Name : {user.name}
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h6">
            Lastname : {user.lastName}
          </Typography>
          <Typography mt="10px" mb="30px" align="center" variant="h6">
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
      <div style={{ height: "10vh" }}></div>
    </>
  );
};

export default Profile;
