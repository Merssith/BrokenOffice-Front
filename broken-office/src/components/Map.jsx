// import { GoogleMap, withScriptsjs, withGoogleMap } from "react-google-maps";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import useGeolocation from "../hooks/useGeolocation";
import PlaceIcon from "@mui/icons-material/Place";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

const ubicaciones = [
  { lat: -31.065328, lng: -59.776482 },
  { lat: -29.853193, lng: -63.687615 },
  { lat: -31.927148, lng: -66.588006 },
  { lat: -37.938279, lng: -68.829217 },
  { lat: -42.271756, lng: -70.543084 },
  { lat: -34.679463, lng: -62.632928 },
  { lat: -35.574222, lng: -66.315545 },
  { lat: -37.456315, lng: -59.776482 },
  { lat: -29.241515, lng: -58.194451 },
  { lat: -24.660166, lng: -61.797967 },
  { lat: -31.179463, lng: -62.942928 },
  { lat: -36.114222, lng: -61.315545 },
  { lat: -48.498315, lng: -69.776482 },
  { lat: -29.241515, lng: -69.194451 },
  { lat: -24.660166, lng: -67.797967 },
];

export default function SimpleMap() {
  // const user = useSelector((state) => state.user);
  // const [users, setUsers] = useState([]);
  // const { location, place } = useGeolocation();

  // useEffect(() => {
  //   axios.get(`/api/users/all`).then((res) => setUsers(res.data));
  // }, []);

  const defaultProps = {
    center: {
      lat: -39.70171,
      lng: -64.628424,
    },
    zoom: 5,
  };
  console.log(ubicaciones);

  return (
    <>
      <Grid style={{ height: "65vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAl-XghXzVClVpAK2vsLYS1Nb7vOLF6xtg" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {ubicaciones.map((ubicacion, i) => (
            <PlaceIcon
              key={i}
              sx={{ color: "red" }}
              lat={ubicacion.lat}
              lng={ubicacion.lng}
            />
          ))}
        </GoogleMapReact>
      </Grid>
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Grid sx={{ display: "flex", flexDirection: "row", mt: "15px" }}>
          <PlaceIcon sx={{ color: "red" }} />
          <Typography> User - {ubicaciones.length}</Typography>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row", mt: "15px" }}>
          <PlaceIcon sx={{ color: "green" }} />
          <Typography> Admin</Typography>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row", mt: "15px" }}>
          <PlaceIcon sx={{ color: "blue" }} />
          <Typography> Superadmin</Typography>
        </Grid>
      </Grid>
    </>
  );
}

// const Map = () => {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     />
//   )
// };

// export default withScriptsjs(withGoogleMap(Map));
