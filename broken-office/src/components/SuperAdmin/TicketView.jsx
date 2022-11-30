import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
import axios from "axios";

import ChatTable from "../Admin/ChatTable";
import DescriptionPhoto from "../Admin/DescriptionPhoto";
import TicketData from "../Admin/TicketData";

const TicketView = () => {
  const [ticket, setTicket] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`/api/incidents/search?id=${params.id}`)
      .then((response) => {
        setTicket(response.data[0]);
      })
      .catch("");
  }, [params.id]);

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
        <Typography mt="10px" mb="30px" align="center" variant="h5">
          Single Ticket
        </Typography>
        <Grid
          sx={{
            width: "100%",
            maxWidth: "800px",
            boxShadow: 6,
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          <TicketData ticket={ticket} />
          <DescriptionPhoto ticket={ticket} />

          {ticket.notes ? (
            <>
              <ChatTable messages={ticket.notes} />
            </>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default TicketView;
