import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPhoto } from "../store/photo";
import { setModalBool } from "../store/modalBool";
import ModalPhoto from "./ModalPhoto";
import { message } from "antd";

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
  const photo = useSelector((state) => state.photo);
  // console.log("esta es la foto", photo);
  const user = useSelector((state) => state.user);
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [device, setDevice] = useState("");

  const modalBool = useSelector((state) => state.modalBool);

  //////////////////HANDLES
  const handleBool = () => {
    if (modalBool === true) {
      dispatch(setModalBool(false));
    } else {
      dispatch(setModalBool(true));
    }
  };
  const handleDevice = (e) => {
    setDevice(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleNewTicket = async (e) => {
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
          photo: photo ? photo : "",
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(setPhoto(""));
      });
    messageSuccess();

    document.getElementById("subject-input").value = "";
    document.getElementById("description-input").value = "";
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
          New Ticket
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
          {/* <FormControl sx={{ width: "100%", marginTop: "15px" }}>
            <InputLabel>Select device</InputLabel>
            <Select
              labelId="usuarios-select"
              id="usuarios-select"
              label="Seleccionar Usuario"
              value={device}
              onChange={handleDevice}
            >
              {User.devices
                ? user.map((usuario, i) => (
                    <MenuItem key={i} value={usuario.id}>
                      {usuario.devices}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl> */}
          <TextField
            sx={{
              marginTop: "15px",
              width: "100%",
              maxWidth: "500px",
              margin: "auto",
            }}
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
            id="description-input"
            label="Description"
            placeholder="Enter a description here..."
            multiline
            fullWidth
            onChange={handleDescription}
            rows={6}
          />
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
        <Button
          sx={ButtonGeneric}
          type="button"
          variant="contained"
          onClick={handleNewTicket}
          fullWidth
        >
          Submit
        </Button>
      </Grid>
      <div style={{ height: "3rem" }}></div>
    </>
  );
};

export default NewTicket;
