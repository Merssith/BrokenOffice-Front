import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import axios from "axios";

const ButtonGeneric = {
  marginTop: "10%",
  marginBottom: "15%",
  color: "#444444",
  width: "auto",
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

const SingleTicket = () => {
  const [ticket, setTicket] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/incidents/search?id=${params.id}`)
      .then((response) => {
        setTicket(response.data[0]);
      })
      .catch("");
  }, [params.id]);

  const handleDeleteTicket = () => {
    // Mensaje "ESTAS SEGURO?" + Boton "SI"-"NO"
    axios.delete(`/api/incidents/delete/${ticket.id}`);
    navigate("/ticket/history");
  };
  return (
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
        TicketID: {ticket.id}
      </Typography>
      <Grid>
        <Typography mt="10px" align="center">
          {<strong>Status</strong>}
        </Typography>
        <Typography mb="30px" align="center">
          {ticket.status}
        </Typography>
        <Typography mt="10px" align="center">
        {<strong>Device</strong>}
        </Typography>
        {ticket.device ? ( <Typography mb="30px" align="center">{ticket.device}</Typography>) :(<Typography mb="30px" align="center">No device detected</Typography>)}
        <Typography mt="10px" align="center">
        {<strong>Location</strong>}
        </Typography>
        <Typography mb="30px" align="center">
          {ticket.place}
        </Typography>
        <Typography mt="10px" align="center">
        {<strong>Subject</strong>}
        </Typography>
        <Typography mb="30px" align="center">
          {ticket.subject}
        </Typography>
      </Grid>
      <Grid>
        <Typography mt="10px" align="center">
        {<strong>Details</strong>}
        </Typography>
        <Typography mb="30px" align="center">
          {ticket.details}
        </Typography>
      </Grid>
      <Grid sx={{ width: "70%", maxWidth: '350px' }}>
        <img width="100%" src={ticket.photo} alt="Ticket" />
      </Grid>
      <Button
        sx={ButtonGeneric}
        onClick={handleDeleteTicket}
        type="button"
        variant="contained"
        component="label"
        fullWidth
      >
        Delete Ticket
      </Button>
    </Grid>
  );
};

export default SingleTicket;
