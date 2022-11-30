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
import CircleIcon from "@mui/icons-material/Circle";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const UserTicketHistory = () => {
  const [tickets, setTickets] = useState([]);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/incidents/byUser/${user.id}`)
      .then((response) => {
        setTickets(response.data);
      })
      .catch("");
  }, [user.id]);

  const handleMoreInfo = (id) => {
    navigate(`/ticket/${id}`);
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
            Ticket History
          </Typography>
        </Grid>

        <TableContainer sx={{ width: "100%" }} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ width: "20%", textAlign: "center", fontSize: 12 }}
                >
                  <Typography>{<strong>Date</strong>}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    width: "50%",
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
                  onClick={() => handleMoreInfo(ticket.id)}
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell sx={{ fontSize: 12 }}>{ticket.id}</TableCell> */}
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.date}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.subject}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.status === "OPEN" ? (
                      <CircleIcon
                        sx={{
                          boxShadow: 6,
                          backgroundColor: "#444444",
                          borderRadius: "8px",
                          color: "#6CDF3C",
                          fontSize: "small",
                        }}
                      />
                    ) : null}
                    {ticket.status === "PENDING" ? (
                      <CircleIcon
                        sx={{
                          boxShadow: 6,
                          backgroundColor: "#444444",
                          borderRadius: "8px",
                          color: "#FFFA1B",
                          fontSize: "small",
                        }}
                      />
                    ) : null}
                    {ticket.status === "IN PROCESS" ? (
                      <CircleIcon
                        sx={{
                          boxShadow: 6,
                          backgroundColor: "#444444",
                          borderRadius: "8px",
                          color: "#F8B932",
                          fontSize: "small",
                        }}
                      />
                    ) : null}
                    {ticket.status === "CLOSED" ? (
                      <CircleIcon
                        sx={{
                          boxShadow: 6,
                          backgroundColor: "#444444",
                          borderRadius: "8px",
                          color: "#F05432",
                          fontSize: "small",
                        }}
                      />
                    ) : null}
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

export default UserTicketHistory;
