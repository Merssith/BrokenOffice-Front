// import { GoogleMap, withScriptsjs, withGoogleMap } from "react-google-maps";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import useGeolocation from "../hooks/useGeolocation";
import PlaceIcon from "@mui/icons-material/Place";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

// const ubicaciones = [
//   { lat: -31.065328, lng: -59.776482 },
//   { lat: -29.853193, lng: -63.687615 },
//   { lat: -31.927148, lng: -66.588006 },
//   { lat: -37.938279, lng: -68.829217 },
//   { lat: -42.271756, lng: -70.543084 },
//   { lat: -34.679463, lng: -62.632928 },
//   { lat: -35.574222, lng: -66.315545 },
//   { lat: -37.456315, lng: -59.776482 },
//   { lat: -29.241515, lng: -58.194451 },
//   { lat: -24.660166, lng: -61.797967 },
//   { lat: -31.179463, lng: -62.942928 },
//   { lat: -36.114222, lng: -61.315545 },
//   { lat: -48.498315, lng: -69.776482 },
//   { lat: -29.241515, lng: -69.194451 },
//   { lat: -24.660166, lng: -67.797967 },
// ];

export default function SimpleMap() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/all`).then((res) => setUsers(res.data));
  }, [users.length]);

  const initialPosition = {
    center: {
      lat: -39.70171,
      lng: -61.628424,
    },
    zoom: 3,
  };


  return (
    <>
      <Grid style={{ height: "65vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAl-XghXzVClVpAK2vsLYS1Nb7vOLF6xtg" }}
          defaultCenter={initialPosition.center}
          defaultZoom={initialPosition.zoom}
        >
          {users ? (
            <>
              {users.map((user, i) => (
                <>
                  {user.userRoleId === 3 ? (
                    <PlaceIcon
                      key={i}
                      sx={{ color: "red" }}
                      lat={user.geoCords.lat}
                      lng={user.geoCords.lng}
                    />
                  ) : null}
                  {user.userRoleId === 2 ? (
                    <PlaceIcon
                      key={i}
                      sx={{ color: "green" }}
                      lat={user.geoCords.lat}
                      lng={user.geoCords.lng}
                    />
                  ) : null}
                  {user.userRoleId === 1 ? (
                    <PlaceIcon
                      key={i}
                      sx={{ color: "blue" }}
                      lat={user.geoCords.lat}
                      lng={user.geoCords.lng}
                    />
                  ) : null}
                </>
              ))}
            </>
          ) : null}
        </GoogleMapReact>
      </Grid>
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Grid sx={{ display: "flex", flexDirection: "row", mt: "15px" }}>
          <PlaceIcon sx={{ color: "red" }} />
          <Typography> User</Typography>
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
