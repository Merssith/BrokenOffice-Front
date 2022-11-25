import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const AsignedTickets = () => {
  const [tickets, setTickets] = useState([]);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  // De momento me trar MIS tickets.
  // Deberia traer los tickets que tenga asignados, con el useEffect de abajo

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:3001/api/incidents/byUser/${user.id}`)
  //       .then((response) => {
  //         setTickets(response.data);
  //       })
  //       .catch("");
  //   }, [user.id]);

  useEffect(() => {
    axios
      .get(`/api/incidents/assignedToMe`)
      .then((response) => {
        setTickets(response.data);
      })
      .catch("");
  }, []);

  const handleManage = (id) => {
    navigate(`/tickets/manage/${id}`);
  };

  return (
    <>
      <Grid
        sx={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "30px",
          margin: "auto",
        }}
      >
        <Grid>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Asigned Tickets
          </Typography>
        </Grid>

        <TableContainer sx={{ width: "100%" }} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ width: "15%", textAlign: "center", fontSize: 12 }}
                >
                  <Typography>{<strong>Date</strong>}</Typography>
                </TableCell>

                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  <Typography>{<strong>Device </strong>}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    width: "30%",
                    textAlign: "center",
                    fontSize: 12,
                  }}
                >
                  <Typography>{<strong>Subject</strong>}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  <Typography>{<strong>Status</strong>}</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map((ticket, i) => (
                <TableRow
                  onClick={() => handleManage(ticket.id)}
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.date}
                  </TableCell>

                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    Device name
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.subject}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default AsignedTickets;