import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material/";
import styled from "@emotion/styled";
import logoGlobantWhiteGreen01 from "../assets/Globant-White-Green-01.png";

const Footer = () => {
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  return (
    <Grid
      container
      display="flex"
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ width: "100%" }}
      bgcolor="black"
      color="white"
    >
      <Grid item align="center" lg={4}>
        <img
          style={{ width: "25%" }}
          src={logoGlobantWhiteGreen01}
          alt="Globant-White-Green-01"
        ></img>
        <Typography>
          All rights reserved Globant {new Date().getFullYear()}
        </Typography>
      </Grid>

      <Grid item lg={4} align="center">
        <Typography>Contact Us</Typography>
        <Box sx={{ color: "#9e9e9e" }}>
          <Typography>Drop us a line</Typography>
          <Typography>hi@globant.com</Typography>
          <Typography>+1 877 215 5230</Typography>
        </Box>
      </Grid>

      <Grid item lg={4} align="center">
        <Typography>Follow Us</Typography>
        <SocialBox sx={{ justifyContent: "center" }}>
          <Link href="/" target="_blank">
            <IconButton sx={{ color: "#BFD732" }}>
              <Facebook />
            </IconButton>
          </Link>
          <Link href="/" target="_blank">
            <IconButton sx={{ color: "#BFD732" }}>
              <Twitter />
            </IconButton>
          </Link>
          <Link href="/" target="_blank">
            <IconButton sx={{ color: "#BFD732" }}>
              <Instagram />
            </IconButton>
          </Link>
        </SocialBox>
      </Grid>
    </Grid>
  );
};

export default Footer;
