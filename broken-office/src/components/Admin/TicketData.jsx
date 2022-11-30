import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const TicketData = ({ ticket, device }) => {
  return (
    <>
      {ticket.user ? (
        <>
          <TableContainer
            sx={{
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
            sx={{ marginTop: "10px", width: "100%" }}
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
            sx={{ marginTop: "10px", width: "100%" }}
            component={Paper}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  {device.brand ? (
                    <TableCell sx={{ textAlign: "left", width: "33%" }}>
                      {device.brand} {device.model}
                    </TableCell>
                  ) : (
                    <TableCell sx={{ textAlign: "left", width: "33%" }}>
                      Device not found
                    </TableCell>
                  )}

                  <TableCell sx={{ textAlign: "right", width: "33%" }}>
                    Status: {ticket.status}
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
