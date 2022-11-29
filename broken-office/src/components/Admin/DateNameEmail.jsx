import React from "react";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

const DateNameEmail = ({ ticket }) => {
  const [data, setData] = useState({
    date: "hola",
    user: { fullName: "algo", email: "algo2" },
  });

  useEffect(() => {
    setData(ticket);
  }, [ticket]);

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
        <Typography sx={{ fontSize: 14 }}>{data.date}</Typography>
      </Grid>
      {/* <Grid sx={{ width: "40%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>{data.user.fullName}</Typography>
      </Grid>
      <Grid sx={{ width: "20%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }}>{data.user.email}</Typography>
      </Grid> */}
    </Grid>
  );
};

export default DateNameEmail;
