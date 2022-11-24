import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import axios from "axios";

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
  }, []);

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
        <Typography mt="10px" mb="30px" align="center">
          Status: {ticket.status}
        </Typography>
        <Typography mt="10px" mb="30px" align="center">
          Device: {ticket.device}
        </Typography>
        <Typography mt="10px" mb="30px" align="center">
          Location: {ticket.place}
        </Typography>
        <Typography mt="10px" mb="30px" align="center">
          Subject: {ticket.subject}
        </Typography>
      </Grid>
      <Grid>
        <Typography mt="10px" mb="30px" align="center">
          Details: {ticket.details}
        </Typography>
      </Grid>
      <Grid>
        <img src={ticket.photo} />
      </Grid>
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "#BFD732",
          borderRadius: "20px",
          width: "50%",
          maxWidth: "200px",
        }}
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
