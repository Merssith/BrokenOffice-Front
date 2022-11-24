import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { Grid, Typography, TextField, Button } from "@mui/material";
import useGeolocation from "../hooks/useGeolocation";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAl-XghXzVClVpAK2vsLYS1Nb7vOLF6xtg");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");

const NewTicket = () => {
  const location = useGeolocation();
  const lat = location.coordinates.lat;
  const lng = location.coordinates.lng;

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
  const [subject, setSubject] = useState("");
  const [device, setDevice] = useState("");
  const [place, setPlace] = useState("");

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
    handleGeolocation();
    console.log(place);
    axios.post(
      "/api/incidents",
      {
        status: "OPEN",
        place: place,
        subject: subject,
        geoCords: lat + "," + lng,
        details: description,
        userId: user.id,
        // photo: "www.myphoto.com",
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    document.getElementById("subject-input").value = "";
    document.getElementById("description-input").value = "";
  };

  const handleGeolocation = async () => {
    await Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        let city, state, country;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        // console.log(city, state, country);
        const localPlace = city + ", " + state + ", " + country;
        setPlace(place);
                // console.log(place); -> Ciudad, Provincia, Pais
        // console.log(address); -> Direccion, Ciudad, Provincia, Pais
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // useEffect(() => {
  //   handleGeolocation();
  //   console.log("Hola");
  //   console.log(place);
  // }, []);

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
        </Button> */}
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
