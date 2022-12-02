import {
  Grid,
  Paper,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const AsignedTickets = () => {
  const initialStatePagination = {
    totalPages: null,
    currentPage: 1,
  };
  const [pagination, setPagination] = useState(initialStatePagination);
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();
  const [pageQuery, setPageQuery] = useSearchParams();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setPageQuery({ page: pagination.currentPage });
    axios
      .get(`/api/incidents/assignedToMe?page=${pagination.currentPage}`)
      .then((response) => {
        setTickets(response.data.incidents);
        if (pagination.totalPages === null)
          setPagination({
            ...pagination,
            totalPages: response.data.totalPages,
          });
      })

      .catch("");
  }, [user, pagination.currentPage]);

  const handleManage = (id) => {
    navigate(`/tickets/manage/${id}`);
  };
  const handlePagination = (e, value) => {
    setPagination({ ...pagination, currentPage: value });
  };

  return (
    <>
      {tickets.length ? (
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
                    <TableRow onClick={() => handleManage(ticket.id)} key={i}>
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
      ) : null}
    </>
  );
};

export default AsignedTickets;
