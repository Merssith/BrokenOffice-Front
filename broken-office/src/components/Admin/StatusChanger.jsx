import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Menu,
  InputLabel,
  Input,
} from "@mui/material";

const StatusChanger = ({ ticket }) => {
  // console.log(ticket);

  // console.log(status);

  // useEffect(() => {
  //   setStatus(ticket.status);
  //   console.log("Nuevo estado", status);
  // }, [ticket]);

  const handleStatus = (e) => {
    console.log(e.target.value);
    axios.put(`/api/incidents/update/${ticket.id}`, { status: e.target.value });
  };

  return (
    <>
      <Grid
        sx={{
          marginTop: "10px",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "10px",
          boxShadow: 1,
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <Typography sx={{ fontSize: 14 }}>
          Ticket status: <strong>{ticket.status}</strong>. Change status here
        </Typography>
        <FormControl sx={{ width: "30%" }}>
          <Select
            id="status-select"
            value={ticket.status}
            size="small"
            displayEmpty
            onChange={handleStatus}
          >
            <MenuItem value="OPEN">OPEN</MenuItem>
            <MenuItem value="PENDING">PENDING</MenuItem>
            <MenuItem value="IN PROCESS">IN PROCESS</MenuItem>
            <MenuItem value="CLOSED">CLOSED</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default StatusChanger;
