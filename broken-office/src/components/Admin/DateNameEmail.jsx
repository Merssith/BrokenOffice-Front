import React from "react";
import { Grid, Typography } from "@mui/material";

const DateNameEmail = ({ ticket }) => {
  return (
    <Grid
      id="name-email"
      sx={{
        marginTop: "10px",
        width: "100%",
        margin: "auto",
        padding: "8px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Grid sx={{ width: "20%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>{ticket.date}</Typography>
      </Grid>
      <Grid sx={{ width: "40%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>ticket.user.fullName</Typography>
      </Grid>
      <Grid sx={{ width: "20%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>ticket.user.email</Typography>
      </Grid>
    </Grid>
  );
};

export default DateNameEmail;
