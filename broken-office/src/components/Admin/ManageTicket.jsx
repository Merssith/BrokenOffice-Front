import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
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

const messages = [
  {
    from: "Leandro",
    message: "Ya estoy con tu caso. En una semana se soluciona todo",
    date: "06/11",
  },
  {
    from: "Mercedes",
    message: "Bueno loco mas te vale o se pudre todo",
    date: "07/11",
  },
  {
    from: "Leandro",
    message: "Me extraña araña, nadie resuelve tickets como yo",
    date: "10/11",
  },
  {
    from: "Mercedes",
    message: "Menos charla y más acción que necesito la compu",
    date: "12/11",
  },
];

const ManageTicket = () => {
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
    navigate("/tickets");
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
        Ticket Manager
      </Typography>
      <Grid
        sx={{
          width: "100%",
          maxWidth: "800px",
          border: "1px",
          boxShadow: 6,
        }}
      >
        <Grid
          id="date-device-status"
          sx={{
            width: "100%",
            padding: "6px",
            boxShadow: 2,
            borderRadius: "3px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid
            sx={{
              width: "25%",
            }}
          >
            {ticket.date}
          </Grid>
          <Grid>Device name</Grid>
          <Grid
            sx={{
              textAlign: "right",
              width: "25%",
            }}
          >
            {ticket.id} - {ticket.status}
          </Grid>
        </Grid>

        <Grid
          id="desc-photo"
          sx={{
            width: "100%",
            padding: "6px",

            boxShadow: 2,
            borderRadius: "3px",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexFlow: "row wrap",
          }}
        >
          <Grid
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
              }}
            >
              {ticket.subject}
            </Grid>
            <Grid sx={{ textAlign: "start" }}>{ticket.details}</Grid>
          </Grid>
          <Grid
            sx={{
              minWidth: "50%",
              maxWidth: "300px",
              margin: "auto",
            }}
          >
            <img width="100%" src={ticket.photo} alt="Ticket" />
          </Grid>
        </Grid>
        <Grid
          id="name-email"
          sx={{
            width: "100%",
            padding: "6px",

            boxShadow: 2,
            borderRadius: "3px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid>User.fullName</Grid>
          <Grid>User.email</Grid>
        </Grid>
        <Grid
          id="messages"
          sx={{
            width: "100%",
            padding: "6px",
            boxShadow: 2,
            borderRadius: "3px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Grid
            sx={{
              width: "100%",
              padding: "6px",
              height: "50px",
              boxShadow: 2,
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <strong>Messages</strong>
          </Grid>

          {messages.map((message, i) => (
            <Grid
              sx={{
                width: "100%",
                padding: "6px",
                alignItems: "center",
                borderRadius: "3px",
                minHeight: "50px",
                margin: "2px",
                display: "flex",
                flexDirection: "row",
                boxShadow: 2,
              }}
              key={i}
            >
              <Grid sx={{ width: "20%" }}>
                <strong>{message.from}</strong>
              </Grid>
              <Grid
                sx={{
                  ml: "10px",
                  mr: "10px",
                  textAlign: "start",
                  width: "60%",
                }}
              >
                {message.message}
              </Grid>
              <Grid
                sx={{
                  textAlign: "right",
                  width: "15%",
                }}
              >
                {message.date}
              </Grid>
            </Grid>
          ))}
          <Grid
            sx={{
              width: "100%",
              padding: "6px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="input-message"
              label="Send a message"
              fullWidth
              type="text"
            />
            <Button sx={{ width: "15%" }}>SEND</Button>
          </Grid>
        </Grid>
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

export default ManageTicket;
