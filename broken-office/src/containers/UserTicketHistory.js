import {
  Grid,
  Pagination,
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

import React from "react";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const UserTicketHistory = () => {
  const initialStatePagination = {
    totalPages: null,
    currentPage: 1,
  };
  const [pagination, setPagination] = useState(initialStatePagination);
  const [tickets, setTickets] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/incidents/byUser/${user.id}?page=${pagination.currentPage}`)
      .then((res) => {
        setTickets(res.data.incidents);
        if (pagination.totalPages === null)
          setPagination({ ...pagination, totalPages: res.data.totalPages });
      })
      .catch("");
  }, [user, pagination, pagination.currentPage]);

  const handleMoreInfo = (id) => {
    navigate(`/ticket/${id}`);
  };
  const handlePagination = (e, value) => {
    setPagination({ ...pagination, currentPage: value });
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
            MY TICKETS
          </Typography>
        </Grid>

        <TableContainer sx={{ width: "100%", height: "480px" }}>
          <Table aria-label="a dense table">
            <TableHead sx={{ height: "0px" }}>
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
              {/* {console.log(tickets.length)}
              {console.log(vacias.length)} */}
              {tickets.map((ticket, i) => (
                <TableRow onClick={() => handleMoreInfo(ticket.id)} key={i}>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {ticket.date}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontSize: 12,
                      wordWrap: "break-word",
                    }}
                  >
                    {ticket.subject}
                  </TableCell>
                  <TableCell
                    value={ticket.status}
                    sx={{ textAlign: "center", fontSize: 12 }}
                  >
                    {ticket.status === "OPEN" ? (
                      <CircleIcon
                        sx={{
                          boxShadow: 6,
                          backgroundColor: "#6CDF3C",
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
                          backgroundColor: "#FFFA1B",
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
                          backgroundColor: "#F8B932",
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
                          backgroundColor: "#F05432",
                          borderRadius: "8px",
                          color: "#F05432",
                          fontSize: "small",
                        }}
                      />
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
              {/* {vacias.map((celda, i) => (
                <TableRow key={i + 8}>
                  <TableCell>{null}</TableCell>
                  <TableCell>{null}</TableCell>
                  <TableCell>{null}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Pagination
        count={pagination.totalPages || 0}
        page={pagination.currentPage}
        onChange={handlePagination}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
        }}
      />
      <Grid sx={{ mb: "100px" }} />
    </>
  );
};

export default UserTicketHistory;
