import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const ChatTable = ({ messages }) => {
  return (
    <>
      <TableContainer
        sx={{ marginTop: "15px", width: "100%" }}
        component={Paper}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: "15%", textAlign: "center", fontSize: 12 }}
              >
                <strong>From</strong>
              </TableCell>

              <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                <strong>Message</strong>
              </TableCell>
              <TableCell
                sx={{ width: "15%", textAlign: "center", fontSize: 12 }}
              >
                <strong>Date</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((message, i) => (
              <TableRow
                // onClick={() => handleManage(ticket.id)}
                key={i}
              >
                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  {message.userName}
                </TableCell>

                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  {message.comment}
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  {message.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ChatTable;
