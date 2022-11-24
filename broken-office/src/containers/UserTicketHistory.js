import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const UserTicketHistory = () => {
  const [tickets, setTickets] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/incidents/byUser/${user.id}`)
      .then((response) => {
        // console.log(response.data);
        setTickets(response.data);
      })
      .catch("");
  }, []);

  const navigate = useNavigate();

  const handleMoreInfo = (id) => {
    // console.log(id);
    // Me guardo el ticket.id
    // Lo guardo en un estado de redux
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
                {/* <TableCell sx={{ fontSize: 12 }}>ID</TableCell> */}
                <TableCell
                  sx={{ width: "20%", textAlign: "center", fontSize: 12 }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    width: "50%",
                    textAlign: "center",
                    fontSize: 12,
                  }}
                >
                  Description
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  Status
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  +
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map((ticket, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell sx={{ fontSize: 12 }}>{ticket.id}</TableCell> */}
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.date}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.details}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.status}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "right",
                    }}
                  >
                    {/* <Link to={`/ticket/${ticket.id}`}>+</Link> */}
                    <Button onClick={() => handleMoreInfo(ticket.id)}>
                      <AddIcon sx={{ fontSize: "medium" }} />
                    </Button>
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
