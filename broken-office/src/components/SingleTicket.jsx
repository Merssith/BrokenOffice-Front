import React from "react";
import { Grid, Button, Typography } from "@mui/material";

const handleDeleteTicket = () => {
  // Mensaje "ESTAS SEGURO?" + Boton "SI"-"NO"
  // navigate ("/usertickethistory")
};

const tickets = [
  {
    id: 1,
    status: "ABIERTO",
    geoCords: "Vila Carlos Paz, Cordoba",
    subject: "Notebook DELL no funciona",
    details:
      "No me anda la computadora nueva. Debo admitir que me la olvidé en la mesa del patio todo el fin de semana. Recién el lunes me acordé donde estaba. Como sabrán llovió desde el viernes hasta el domingo. No me despidan porfa",
    photo:
      "https://www.computershopping.com.ar/Images/Productos/DELL-LAT-3520_Foto0.jpg",
    date: "2022-11-18",

    userId: 1,
  },
];

const SingleTicket = () => {
  return (
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
        TicketID: {tickets[0].id}
      </Typography>
      <Grid>
        <Typography mt="10px" mb="30px" align="center">
          Status: {tickets[0].status}
        </Typography>
        <Typography mt="10px" mb="30px" align="center">
          Device: {tickets[0].device}
        </Typography>
        <Typography mt="10px" mb="30px" align="center">
          Location: {tickets[0].geoCords}
        </Typography>
        <Typography mt="10px" mb="30px" align="center">
          Subject: {tickets[0].subject}
        </Typography>
      </Grid>
      <Grid>
        <Typography mt="10px" mb="30px" align="center">
          Details: {tickets[0].details}
        </Typography>
      </Grid>
      <Grid>
        <img src={tickets[0].photo} />
      </Grid>
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "#BFD732",
          borderRadius: "20px",
          width: "50%",
          maxWidth: "200px",
        }}
        onClick={handleDeleteTicket}
        type="button"
        variant="contained"
        component="label"
        fullWidth
      >
        Delete Ticket
      </Button>
    </Grid>
  );
};

export default SingleTicket;
