import { Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Paper sx={{ width: "100%" }}>
      <Box
        px={{ xs: 2, sm: 4 }}
        py={{ xs: 2, sm: 4 }}
        bgcolor="black"
        color="white"
      >
        <Container></Container>
      </Box>
    </Paper>
  );
};

export default Footer;
