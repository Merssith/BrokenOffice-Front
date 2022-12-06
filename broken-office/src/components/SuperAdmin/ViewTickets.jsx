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
  Pagination,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ViewTickets = () => {
  const initialStatePagination = {
    totalPages: null,
    currentPage: 1,
  };

  const [tickets, setTickets] = useState([]);
  const [filterValue, setFilterValue] = useState("ALL");
  const [dropdown, setDropdown] = useState(false);
  const [pagination, setPagination] = useState(initialStatePagination);

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (filterValue === "ALL") {
      axios

        .get(`/api/incidents/all?page=${pagination.currentPage}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          setTickets(response.data.incidents);

          setPagination({
            ...pagination,
            totalPages: response.data.totalPages,
          });
        })
        .catch("");
    } else {
      axios

        .get(
          `http://localhost:3001/api/incidents/search?status=${filterValue}&page=${pagination.currentPage}`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )

        .then((response) => {
          setTickets(response.data.incidents);

          setPagination({
            ...pagination,
            totalPages: response.data.totalPages,
          });
        })
        .catch("");
    }
  }, [user, filterValue, pagination.currentPage, tickets.length]);

  const handleManage = (id) => {
    navigate(`/tickets/${id}`);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
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
            ALL TICKETS
          </Typography>
        </Grid>
        {tickets.length ? (
          <TableContainer sx={{ width: "100%", height: "700px" }}>
            <Table aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ width: "15%", textAlign: "center", fontSize: 14 }}
                  >
                    <Typography>{<strong>Date</strong>}</Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 14 }}>
                    <Typography>{<strong> ID </strong>}</Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "30%",
                      textAlign: "center",
                      fontSize: 14,
                    }}
                  >
                    <Typography>{<strong>Subject</strong>}</Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 14 }}>
                    <Typography>
                      {
                        <Dropdown isOpen={dropdown} toggle={handleDropdown}>
                          <DropdownToggle caret className="dropdownBtn">
                            Status
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Filter by Status</DropdownItem>
                            <DropdownItem diviver />
                            <DropdownItem onClick={() => setFilterValue("ALL")}>
                              All tickets
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => setFilterValue("OPEN")}
                            >
                              Open
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => setFilterValue("PENDING")}
                            >
                              Pending
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => setFilterValue("IN PROCESS")}
                            >
                              In process
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => setFilterValue("CLOSED")}
                            >
                              Closed
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      }
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets.reverse().map((ticket, i) => (
                  <TableRow onClick={() => handleManage(ticket.id)} key={i}>
                    <TableCell sx={{ textAlign: "center", fontSize: 14 }}>
                      {ticket.date}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: 14 }}>
                      {ticket.id}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: 14 }}>
                      {ticket.subject}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center", fontSize: 14 }}>
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
        ) : null}
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

export default ViewTickets;
