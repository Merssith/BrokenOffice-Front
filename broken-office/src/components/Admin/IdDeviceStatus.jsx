import React from "react";
import { Grid, Typography } from "@mui/material";

const IdDeviceStatus = ({ ticket }) => {
  return (
    <Grid
      id="date-device-status"
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
        <Typography sx={{ fontSize: 14 }}>Ticket ID {ticket.id}</Typography>
      </Grid>
      <Grid sx={{ width: "40%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>DEVICE</Typography>
      </Grid>
      <Grid sx={{ width: "20%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>{ticket.status}</Typography>
      </Grid>
    </Grid>
  );
};

export default IdDeviceStatus;
