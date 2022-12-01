import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router";

const ProfileView = () => {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/api/users/search/${params.id}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch("");
  }, [params.id]);

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
        {user.id ? (
          <>
            <Paper
              sx={{
                width: "70%",
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                margin: "auto",
              }}
            >
              <Grid
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <Grid sx={{ alignItems: "left" }}>
                  <img
                    style={{
                      width: "100%",
                      maxWidth: "100px",
                      borderRadius: "10%",
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
                    {
                      <strong>
                        {user.name} {user.lastName}
                      </strong>
                    }
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
                <Typography variant="subtitle1" mt="10px">
                  {" "}
                  {<strong>Glober ID:</strong>} {user.id}
                </Typography>
                <Typography variant="subtitle1" mt="10px">
                  {" "}
                  {<strong>Rol:</strong>} {user.userRole.name}
                </Typography>
                <Typography variant="subtitle1" mt="10px">
                  {" "}
                  {<strong>Office:</strong>} {user.office.name}
                </Typography>

                <Typography variant="subtitle1" mt="10px">
                  {<strong>Location:</strong>}
                </Typography>
                <Typography variant="subtitle1" mt="10px">
                  {user.place}
                </Typography>

                {user.telephone && (
                  <Typography variant="subtitle1" mt="10px">
                    {<strong>Tel. n°:</strong>} {user.telephone}
                  </Typography>
                )}
                <Typography variant="subtitle1" mt="10px">
                  {" "}
                  {<strong>Email:</strong>} {user.email}
                </Typography>
              </Grid>
            </Paper>
          </>
        ) : null}
      </Grid>
    </>
  );
};

export default ProfileView;
