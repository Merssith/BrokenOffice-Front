import React from "react";
import { Paper, Grid, Typography } from "@mui/material";

import { useNavigate } from "react-router";

const user = {
  fullName: "Maribel Navarro",
  id: 5,
  name: "Maribel",
  lastName: "Navarro",
  email: "maribel@1.com",
  password: "$2b$10$0KOWkG9QTReUn.4yEcabx.yqwdwHNFw7tSc1MNqCR.dqi4vmDmK2G",
  salt: "$2b$10$0KOWkG9QTReUn.4yEcabx.",
  telephone: 1234567,
  geoCords: "-36.892630851664954,-60.313803273329924",
  place: "Olavarría, Provincia de Buenos Aires, Argentina",
  avatar:
    "https://res.cloudinary.com/dsdiadotw/image/upload/v1668696029/avatar_default_rgp6yr.png",
  createdAt: "2022-11-29T17:02:03.022Z",
  updatedAt: "2022-11-29T20:46:21.257Z",
  userRoleId: 2,
  officeId: 3,
  userRole: {
    id: 2,
    name: "Admin",
    createdAt: "2022-11-29T17:02:02.639Z",
    updatedAt: "2022-11-29T17:02:02.639Z",
  },
  office: {
    id: 3,
    name: "Córdoba",
    geoCords: "-31.4005355,-64.2259629",
    createdAt: "2022-11-29T17:02:02.654Z",
    updatedAt: "2022-11-29T17:02:02.654Z",
  },
  items: [],
  incidents: [],
};

const ButtonGeneric = {
  margin: "2rem",
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

const ProfileView = ({ USER }) => {
  const navigate = useNavigate();

  //////////////////HANDLES

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
      </Grid>
    </>
  );
};

export default ProfileView;
