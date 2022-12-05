import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import { message, notification } from "antd";
import ChatTable from "../Admin/ChatTable";
import DescriptionPhoto from "../Admin/DescriptionPhoto";
import TicketData from "../Admin/TicketData";
import { useNavigate } from "react-router-dom";

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

const TicketView = () => {
  const [ticket, setTicket] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/incidents/filter/${params.id}`)
      .then((response) => {
        setTicket(response.data[0]);
      })
      .catch("");
  }, [params.id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    axios.delete(`/api/incidents/delete/${ticket.id}`);
    messageDelete();
    navigate("/tickets/all");
  };

  return (
    <>
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
                  <ChatTable messages={ticket.notes} />
                </>
              ) : null}
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
                  <Button sx={ButtonGeneric} onClick={handleClose}>
                    No
                  </Button>
                  <Button
                    sx={ButtonGeneric}
                    onClick={handleDeleteTicket}
                    autoFocus
                  >
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Grid>
        </>
      ) : null}
      <Grid sx={{ mb: "100px" }} />
    </>
  );
};

export default TicketView;
