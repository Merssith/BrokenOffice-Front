import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const TicketData = ({ ticket }) => {
  return (
    <>
      {ticket.user ? (
        <>
          <TableContainer
            sx={{
              boxShadow: 0,
              marginTop: "10px",
              width: "100%",
              padding: "auto",
            }}
            component={Paper}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "left", width: "33%" }}>
                    {ticket.user.fullName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "right", width: "33%" }}>
                    Ticket ID: {ticket.id}
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <TableContainer
            sx={{ marginTop: "10px", width: "100%", boxShadow: 0 }}
            component={Paper}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "left", width: "33%" }}>
                    {ticket.user.email}
                  </TableCell>

                  <TableCell sx={{ textAlign: "right", width: "33%" }}>
                    {ticket.date}
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <TableContainer
            sx={{ marginTop: "10px", width: "100%", boxShadow: 0 }}
            component={Paper}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  {ticket.item ? (
                    <TableCell sx={{ textAlign: "left", width: "33%" }}>
                     {ticket.item.device} {ticket.item.brand} {ticket.item.model}
                    </TableCell>
                  ) : (
                    <TableCell sx={{ textAlign: "left", width: "33%" }}>
                      Device not found
                    </TableCell>
                  )}

                  <TableCell sx={{ textAlign: "right", width: "33%" }}>
                    Status: <strong>{ticket.status}</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </>
      ) : null}
    </>
  );
};

export default TicketData;
