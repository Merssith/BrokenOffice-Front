import React from "react";
import { useState } from "react";
import axios from "axios";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPhoto } from "../store/photo";
import { setModalBool } from "../store/modalBool";
import ModalPhoto from "./ModalPhoto";
import { message } from "antd";
import { useNavigate } from "react-router";
import { setIncidentPhoto } from "../store/photo";

const ButtonGeneric = {
  margin: "1.5rem",
  color: "#444444",
  width: "auto",
  boxShadow: 4,
  transform: "scale(1.3)",
  backgroundColor: "#BFD732",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#BFD732",
  },
  "&:active": {
    color: "white",
  },
};

const NewTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const incidentPhoto = useSelector((state) => state.photo.incidentPhoto);
  const user = useSelector((state) => state.user);
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const modalBool = useSelector((state) => state.modalBool);

  //////////////////HANDLES
  const handleBool = () => {
    if (modalBool === true) {
      dispatch(setModalBool(false));
    } else {
      dispatch(setModalBool(true));
    }
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/incidents",
        {
          status: "OPEN",
          place: user.place,
          subject: subject,
          geoCords: user.geoCords,
          details: description,
          userId: user.id,
          photo: incidentPhoto ? incidentPhoto : "",
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        let tkt = res.data.id;
        dispatch(setPhoto(""));
        dispatch(setIncidentPhoto(""));
        messageSuccess();
        setSubject("");
        setDescription("");
        navigate(`/ticket/${tkt}`);
      });
  };

  const messageSuccess = () => {
    message.success({
      content: "Ticket created successfully!",
      className: "text",
      style: {
        zIndex: "1",
      },
      duration: 4,
    });
  };

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
          NEW TICKET
        </Typography>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "75%",
            margin: "auto",
          }}
        >
          <TextField
            sx={{
              marginTop: "15px",
              width: "100%",
              maxWidth: "500px",
              margin: "auto",
            }}
            required
            value={subject}
            id="subject-input"
            label="Subject"
            placeholder="Subject"
            fullWidth
            onChange={handleSubject}
          />
          <TextField
            sx={{
              marginTop: "15px",
              width: "100%",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            required
            value={description}
            id="description-input"
            label="Description"
            placeholder="Enter a description here..."
            multiline
            fullWidth
            onChange={handleDescription}
            rows={6}
          />
          {incidentPhoto && (
            <Grid
              sx={{
                margin: "auto",
                width: "100%",
                maxWidth: "500px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "100%",
                  marginTop: "5%",
                  marginLeft: "auto",
                  maxWidth: "500px",
                }}
                src={incidentPhoto}
                alt="incident"
              />
            </Grid>
          )}
        </Grid>

        <Button
          sx={ButtonGeneric}
          variant="contained"
          component="label"
          fullWidth
          onClick={handleBool}
        >
          Take Photo
          {/* <input hidden accept="image/*" multiple type="file" /> */}
        </Button>
        <ModalPhoto />
        {subject === "" || description === "" || incidentPhoto === "" ? (
          <Button
            sx={ButtonGeneric}
            type="button"
            variant="contained"
            onClick={handleCreateTicket}
            fullWidth
            disabled
          >
            Submit
          </Button>
        ) : (
          <Button
            sx={ButtonGeneric}
            type="button"
            variant="contained"
            onClick={handleCreateTicket}
            fullWidth
          >
            Submit
          </Button>
        )}
      </Grid>
      <Grid sx={{ mb: "100px" }} />
    </>
  );
};

export default NewTicket;
