import React from "react";
import { Grid, Typography } from "@mui/material";

const DescriptionPhoto = ({ ticket }) => {
  return (
    <Grid
      id="desc-photo"
      sx={{
        marginTop: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexFlow: "row wrap",
        boxShadow: 1,
        borderRadius: "5px",
      }}
    >
      <Grid
        id="subject-description"
        sx={{
          minWidth: "50%",
          maxWidth: "300px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <Typography sx={{ fontSize: 16, mb: "10px" }}>
            <strong>{ticket.subject}</strong>
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: "center", margin: "auto" }}>
          <Typography
            sx={{
              justifyContent: "center",
              fontSize: 14,
            }}
          >
            {ticket.details}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        id="photo"
        sx={{
          minWidth: "50%",
          maxWidth: "300px",
          margin: "auto",
        }}
      >
        <img width="99%" src={ticket.photo} alt="Ticket" />
      </Grid>
    </Grid>
  );
};

export default DescriptionPhoto;
