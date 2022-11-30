import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
import axios from "axios";

import ChatTable from "../Admin/ChatTable";
import DescriptionPhoto from "../Admin/DescriptionPhoto";
import TicketData from "../Admin/TicketData";

const ticket = {
  id: 1,
  status: "OPEN",
  geoCords: "22222,5555",
  place: "Las Toninas, Buenos Aires, Argentina",
  subject: "Incident report #862",
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in elit sodales, aliquam mi ac, gravida nulla. Vivamus pretium fermentum aliquet. Integer aliquam maximus mi a convallis. Aliquam egestas, sapien nec feugiat placerat, libero neque vulputate elit, eget sagittis tellus erat et sem. Maecenas condimentum nisl vitae varius lacinia. Duis eros felis, mattis at sodales eget, iaculis a urna. Curabitur ultricies quam odio, quis auctor felis mollis quis. Phasellus auctor, turpis non consequat venenatis, ex libero feugiat felis, at aliquam ipsum purus et ligula. Maecenas placerat eros neque, non dictum odio gravida ut.",
  photo:
    "https://res.cloudinary.com/dsdiadotw/image/upload/v1669741324/incidents/inc-ph-d1384b7b-f0e5-4f89-8b75-ba0d32c739eb.jpg",
  date: "2022-11-29",
  assignedToUserId: 5,
  notes: null,
  createdAt: "2022-11-29T17:02:08.265Z",
  updatedAt: "2022-11-29T17:02:08.273Z",
  itemId: 5,
  userId: 2,
  item: {
    id: 5,
    device: "Laptop",
    brand: "BGH",
    model: "PositivoZ210",
    color: "Gray",
    createdAt: "2022-11-29T17:02:03.212Z",
    updatedAt: "2022-11-29T17:02:03.212Z",
    categoryId: 1,
    officeId: 2,
    userId: 2,
  },
  assignedToUser: {
    id: 5,
    fullName: "Maribel Navarro",
    email: "maribel@1.com",
  },
  user: {
    id: 2,
    name: "Juana",
    lastName: "Perez",
    fullName: "Juana Perez",
    email: "juana@1.com",
    telephone: 1234567,
    geoCords: "-36.89263083837297,-60.31380324674595",
    place: "Olavarría, Provincia de Buenos Aires, Argentina",
    avatar:
      "https://res.cloudinary.com/dsdiadotw/image/upload/v1668696029/avatar_default_rgp6yr.png",
    userRoleId: 2,
  },
};

const ButtonGeneric = {
  marginTop: "10%",
  marginBottom: "15%",
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

const TicketView = ({ TICKET }) => {
  //   const [ticket, setTicket] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const [device, setDevice] = useState({});

  //   useEffect(() => {
  //     axios
  //       .get(`/api/incidents/search?id=${params.id}`)
  //       .then((response) => {
  //         setTicket(response.data[0]);
  //       })
  //       .catch("");
  //   }, [params.id]);

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
          <TicketData ticket={ticket} device={device} />
          <DescriptionPhoto ticket={ticket} />

          {ticket.notes ? (
            <>
              <ChatTable messages={ticket.notes} />
            </>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default TicketView;
