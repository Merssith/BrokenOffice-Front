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

const NewTicket = () => {
  const user = useSelector((state) => state.user);
  const [description, setDescription] = useState("");
  const [device, setDevice] = useState("");

  const handleDevice = (e) => {
    e.preventDefault();
    setDevice(e.target.value);
  };
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
        container
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
        <Grid>
          <FormControl sx={{ width: "100%", marginTop: "15px" }}>
            <InputLabel>Select device</InputLabel>
            <Select
              labelId="usuarios-select"
              id="usuarios-select"
              label="Seleccionar Usuario"
              value={device}
              onChange={handleDevice}
            >
              {/* {User.devices
              ? user.map((usuario, i) => (
                  <MenuItem key={i} value={usuario.id}>
                    {usuario.devices}
                  </MenuItem>
                ))
              : null} */}
            </Select>
          </FormControl>

          <TextField
            sx={{ marginTop: "15px", width: "100%" }}
            id="outlined-multiline-static"
            label="Description"
            placeholder="Enter a description here..."
            multiline
            onChange={handleDescription}
            rows={4}
          />
        </Grid>
        <Button
          sx={{
            marginTop: "20px",
            backgroundColor: "#BFD732",
            borderRadius: "20px",
            width: "40%",
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
            width: "40%",
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
            width: "40%",
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
