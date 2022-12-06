import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
import axios from "axios";
import ChatTable from "./ChatTable";
import DescriptionPhoto from "./DescriptionPhoto";
import StatusChanger from "./StatusChanger";
import TicketData from "./TicketData";

const ButtonGeneric = {
  marginTop: "10%",
  marginBottom: "15%",
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

const ManageTicket = () => {
  const [ticket, setTicket] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState(ticket.notes);

  useEffect(() => {
    axios
      .get(`/api/incidents/filter/${params.id}`)
      .then((response) => {
        setTicket(response.data[0]);
      })
      .catch("");
  }, [ticket.notes, notes, message]);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message !== "") {
      axios.post(`/api/incidents/note/${ticket.id}`, { note: message });
      setMessage("");
    }
  };
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
        // paddingBottom: "30px",
        margin: "auto",
      }}
    >
      <Typography mt="10px" mb="30px" align="center" variant="h5">
        TICKET MANAGER
      </Typography>
      <Grid
        sx={{
          width: "100%",
          maxWidth: "800px",
          boxShadow: 4,
          borderRadius: "6px",
          padding: "8px",
        }}
      >
        <TicketData ticket={ticket} />
        <StatusChanger ticket={ticket} setNotes={setNotes} />
        <DescriptionPhoto ticket={ticket} />

        {ticket.notes ? (
          <>
            <ChatTable messages={ticket.notes} />{" "}
            <Grid
              sx={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TextField
                value={message}
                id="input-message"
                label="Send a message"
                fullWidth
                type="text"
                size="small"
                onChange={handleChangeMessage}
              />

              <Button onClick={handleSend} sx={{ width: "10%" }}>
                SEND
              </Button>
            </Grid>
          </>
        ) : null}
      </Grid>
      {/* <Button
        sx={ButtonGeneric}
        onClick={handleDeleteTicket}
        type="button"
        variant="contained"
        component="label"
        fullWidth
      >
        Delete Ticket
      </Button> */}
      <Grid sx={{ mb: "100px" }} />
    </Grid>
  );
};

export default ManageTicket;
