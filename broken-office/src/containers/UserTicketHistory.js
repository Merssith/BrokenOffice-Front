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
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const UserTicketHistory = () => {
  //const [tickets, setTickets] = useState([]);
  //   const user = useSelector((state) => {
  //     state.user
  //   });

  //   useEffect(() => {
  //     axios
  //       .get("/incidents/all", { id: user.id, role: user.role })
  //       .then((response) => {
  //         setTickets(response.data.incidents);
  //       })
  //       .catch("");
  //   }, []);

  const tickets = [
    {
      id: 1,
      date: 17 / 12 / 22,
      details: "computer ",
      status: "pending",
    },
    {
      id: 2,
      date: 21 / 12 / 22,
      details: "computer ",
      status: "pending",
    },
    {
      id: 3,
      date: 29 / 12 / 22,
      details: "computer ",
      status: "pending",
    },
    {
      id: 4,
      date: 30 / 12 / 22,
      details: "computer ",
      status: "pending",
    },
  ];

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        sx={{ width: "90%", m: 4 }}
      >
        <Grid>
          <Typography variant="h2" gutterBottom>
            UserTicketHistory
          </Typography>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">DATE</TableCell>
                <TableCell align="right">DESCRIPTION&nbsp;(g)</TableCell>
                <TableCell align="right">STATUS&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map((ticket) => (
                //     <Link
                //     to={`/ticket/${ticket.id}`}
                //     style={{ textDecoration: "none" }}
                //   >
                <TableRow
                  key={ticket.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="ticket">
                    {ticket.id}
                  </TableCell>

                  <TableCell align="right">{ticket.date}</TableCell>
                  <TableCell align="right">{ticket.details}</TableCell>
                  <TableCell align="right">{ticket.status}</TableCell>
                </TableRow>
                // </Link>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid></Grid>
      </Grid>
    </>
  );
};

export default UserTicketHistory;
