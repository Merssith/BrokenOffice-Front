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
import { message, notification } from "antd";
import "../styles/ModalProfile.css";

import ChatTable from "./Admin/ChatTable";
import DescriptionPhoto from "./Admin/DescriptionPhoto";
import DateNameEmail from "./Admin/DateNameEmail";
import IdDeviceStatus from "./Admin/IdDeviceStatus";
import TicketData from "./Admin/TicketData";

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
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`/api/incidents/search?id=${params.id}`)
      .then((response) => {
        setTicket(response.data[0]);
      })
      .catch("");
  }, [params.id]);

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
    messageDelete();
    navigate("/ticket/history");
  };

  const messageDelete = () => {
    message.success({
      content: "Ticket deleted successfully!",
      className: "delete",
      style: {
        zIndex: "1",
      },
      duration: 4,
    });
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

        <Grid id="messages">
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
