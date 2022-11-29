import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import ChatTable from "./ChatTable";
import DescriptionPhoto from "./DescriptionPhoto";
import DateNameEmail from "./DateNameEmail";
import IdDeviceStatus from "./IdDeviceStatus";
import StatusChanger from "./StatusChanger";
import TicketData from "./TicketData";

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

const ManageTicket = () => {
  const [ticket, setTicket] = useState({});
  const [device, setDevice] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`/api/incidents/search?id=${params.id}`)
      .then((response) => {
        setTicket(response.data[0]);
      })
      .catch("");
  }, [ticket.id]);

  useEffect(() => {
    if (ticket.itemId) {
      axios.get(`/api/item/${ticket.itemId}`).then((response) => {
        setDevice(response.data);
        console.log(response.data);
      });
    }
  }, [ticket.id]);

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
        Ticket Manager
      </Typography>
      <Grid
        sx={{
          width: "100%",
          maxWidth: "800px",
          boxShadow: 6,
          borderRadius: "8px",
          padding: "8px 8px 16px",
        }}
      >
        <TicketData ticket={ticket} device={device} />
        <DescriptionPhoto ticket={ticket} />
        <StatusChanger ticket={ticket} />
        <Grid id="messages">
          {ticket.notes ? <ChatTable messages={ticket.notes} /> : null}
          <Grid
            sx={{ marginTop: "10px", display: "flex", flexDirection: "row" }}
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
