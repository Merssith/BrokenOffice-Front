import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Button,
  Typography,
  TextField,
  Alert,
  Link,
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
  marginTop: "40px",
  marginBottom: "15px",
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

const SingleTicket = () => {
  const user = useSelector((state) => state.user);
  const [ticket, setTicket] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [device, setDevice] = useState({});
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  useEffect(() => {
    axios
      .get(`/api/incidents/filter/${params.id}`)
      .then((response) => {
        setTicket(response.data[0]);
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          setAlertContent("Unauthorized: Access is denied due to invalid credentials");
          setAlert(true);
        } else {
          console.log(error);
        }
      });
  }, [ticket.id]);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSend = (e) => {
    if (message !== "") {
      axios.post(`/api/incidents/note/${ticket.id}`, { note: message });
      setMessage("");
    }
  };

  const handleShare = (ticketId, email) => {
    console.log(ticketId);
    console.log(email);
    axios.post(`/api/incidents/share/${ticketId}`, { email: email });
    setEmail("");
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
    <>
    {alert ? <Alert severity='error' onClose={() => {navigate("/ticket/history?page=1")}}>{alertContent}</Alert> : <></> }
      {ticket.id ? (
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
            <Typography mt="30px" align="center" variant="h6">
              Share this incident
            </Typography>
            <Grid
              sx={{
                width: "100%",
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TextField
                sx={{ width: "65%" }}
                value={email}
                id="input-share"
                label="Enter an e-mail address"
                fullWidth
                type="text"
                size="small"
                onChange={handleChangeEmail}
              />
              <Button
                onClick={() => handleShare(ticket.id, email)}
                sx={{ width: "5%" }}
              >
                Share
              </Button>
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
        </>
      ) : null}
    </>
  );
};

export default SingleTicket;
