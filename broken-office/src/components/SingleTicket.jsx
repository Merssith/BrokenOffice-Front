import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import {
  Grid,
  Button,
  Typography,
  TextField,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import "../styles/ModalProfile.css";
import ChatTable from "./Admin/ChatTable";
import DescriptionPhoto from "./Admin/DescriptionPhoto";
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
  const [open, setOpen] = useState(false);
  const [ticket, setTicket] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState("");
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
          setAlertContent(
            "Unauthorized: Access is denied due to invalid credentials"
          );
          setAlert(true);
        } else {
          console.log(error);
        }
      });
  }, [ticket.notes]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeMessage = (e) => {
    setMessages(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSend = (e) => {
    if (messages !== "") {
      axios.post(`/api/incidents/note/${ticket.id}`, { note: messages });
      setMessages("");
    }
  };

  const handleShare = (ticketId, email) => {
    axios.post(`/api/incidents/share/${ticketId}`, { email: email });
    setEmail("");
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

  const handleDeleteTicket = () => {
    handleClose();
    axios.delete(`/api/incidents/delete/${ticket.id}`);
    messageDelete();
    navigate("/ticket/history/*");
    
  };



  return (
    <>
      {alert ? (
        <Alert
          severity="error"
          onClose={() => {
            navigate("/ticket/history?page=1");
          }}
        >
          {alertContent}
        </Alert>
      ) : (
        <></>
      )}
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
              SINGLE TICKET
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
                      value={messages}
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
            <Typography mt="30px" align="center">
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
              onClick={handleClickOpen}
              type="button"
              variant="contained"
              component="label"
              fullWidth
            >
              Delete Ticket
            </Button>
            <div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    This ticket will be removed from our database.
                  </DialogContentText>
                </DialogContent>
                <DialogActions
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    sx={ButtonGeneric}
                    onClick={handleDeleteTicket}
                    autoFocus
                  >
                    Yes
                  </Button>
                  <Button sx={ButtonGeneric} onClick={handleClose}>
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Grid>
          <Grid sx={{ mb: "100px" }} />
        </>
      ) : null}
    </>
  );
};

export default SingleTicket;
