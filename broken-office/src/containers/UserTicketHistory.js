import {
  Grid,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TablePagination,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import React from "react";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const UserTicketHistory = () => {
  const initialStatePagination = {
    totalPages: null,
    currentPage: 1,
  };
  const [pagination, setPagination] = useState(initialStatePagination);
  const [tickets, setTickets] = useState([]);
  const [vacias, setVacias] = useState([]);
  const user = useSelector((state) => state.user);
  const [pageQuery, setPageQuery] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setPageQuery({ page: pagination.currentPage });
    axios
      .get(`/api/incidents/byUser/${user.id}?${pageQuery}`)
      .then((res) => {
        setTickets(res.data.incidents);
        if (pagination.totalPages === null)
          setPagination({ ...pagination, totalPages: res.data.totalPages });
      })
      .catch("");
  }, [user, pagination, pageQuery]);

  const handleMoreInfo = (id) => {
    navigate(`/ticket/${id}`);
  };
  const handlePagination = (e, value) => {
    setPagination({ ...pagination, currentPage: value });
  };

  const handleShowContent = () => {
    return tickets.slice();
  };

  // console.log(tickets.length);
  // console.log(vacias);

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
          <Table aria-label="a dense table">
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
    </>
  );
};

export default UserTicketHistory;
