import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

const StatusChanger = ({ ticket, setNotes }) => {
  const [commit, setCommit] = useState("");
  const [commitOpen, setCommitOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleCommit = (e) => {
    setCommit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/incidents/update/${ticket.id}`, {
      status: status,
    });
    axios.post(`/api/incidents/note/${ticket.id}`, {
      note: `Ticket status changed to ${status}. Reason: ${commit}`,
    });
    setCommit("");
    setNotes(commit)
    setCommitOpen(!commitOpen);
  };
  const handleStatus = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
    setCommitOpen(!commitOpen);
  };

  return (
    <>
      <Grid
        sx={{
          marginTop: "10px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "10px",
          // boxShadow: 1,
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <Grid
          sx={{
            width: "100%",
            // maxWidth: "500px",

            marginTop: "10px",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: 16 }}>Change status here</Typography>
          <FormControl sx={{ width: "40%", maxWidth: "160px" }}>
            <Select
              id="status-select"
              value={ticket.status}
              size="small"
              displayEmpty
              onChange={handleStatus}
            >
              <MenuItem value="OPEN">OPEN</MenuItem>
              <MenuItem value="PENDING">PENDING</MenuItem>
              <MenuItem value="IN PROCESS">IN PROCESS</MenuItem>
              <MenuItem value="CLOSED">CLOSED</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {commitOpen ? (
          <Grid
            sx={{
              width: "100%",

              marginTop: "5px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: 14, textAlign: "center" }}>
              Reason:
            </Typography>
            <Grid
              sx={{
                width: "100%",
                margin: "auto",
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                value={commit}
                id="input-message"
                label="Reason to change status"
                fullWidth
                type="text"
                size="small"
                onChange={handleCommit}
              />

              <Button size="small" onClick={handleSubmit} sx={{ width: "5%" }}>
                Commit
              </Button>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default StatusChanger;
