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
    <TableContainer sx={{ marginTop: "10px", width: "100%" }} component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ticket ID {ticket.id}</TableCell>
            <TableCell>Device</TableCell>
            <TableCell>Status: {ticket.status}</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>{ticket.date}</TableCell>
            <TableCell>ticket.user.name</TableCell>
            <TableCell>ticket.user.email</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default TicketData;
