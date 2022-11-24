import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const NewTicket = () => {
  const photo = useSelector((state)=> state.photo)
  //console.log("esta es la foto", photo)
  const user = useSelector((state) => state.user);
  const [description, setDescription] = useState("");
  const [device, setDevice] = useState("");

  const handleDevice = (e) => {
    e.preventDefault();
    setDevice(e.target.value);
  };
  const handleSubject = () => {};
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const handleGeolocation = (e) => {
    e.preventDefault();
  };
  const handleNewTicket = (e) => {
    e.preventDefault();
    axios.post(
      "/api/incidents",
      {
        status: "ABIERTO",
        geoCords: "[22222],[5555]",
        details: description,
        photo: "www.miphoto.coma",
        userId: user.id,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
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
            label="Description"
            placeholder="Enter a description here..."
            multiline
            fullWidth
            onChange={handleDescription}
            rows={6}
          />
        </Grid>
        <Link to="/photo">
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#BFD732",
            borderRadius: "20px",
            width: "50%",
            maxWidth: "200px",
          }}
          variant="contained"
          component="label"
          fullWidth
        >
          Take Photo
          {/* <input hidden accept="image/*" multiple type="file" /> */}
        </Button>
        </Link>
       
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#BFD732",
            borderRadius: "20px",
            width: "50%",
            maxWidth: "200px",
          }}
          variant="contained"
          component="label"
          fullWidth
        >
          Add Photo
          <input hidden accept="image/*" multiple type="file" />
        </Button>
     
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#BFD732",
            borderRadius: "20px",
            width: "50%",
            maxWidth: "200px",
          }}
          onClick={handleGeolocation}
          type="button"
          variant="contained"
          component="label"
          fullWidth
        >
          Geolocalize me
        </Button>
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#BFD732",
            borderRadius: "20px",
            width: "50%",
            maxWidth: "200px",
          }}
          type="button"
          variant="contained"
          onClick={handleNewTicket}
          fullWidth
        >
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default NewTicket;
