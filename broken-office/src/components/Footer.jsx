import { Grid, IconButton, Typography, AppBar } from "@mui/material";
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
      sx={{
        width: "100%",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          color: "#9e9e9e",
        }}
      >
        <Grid
          id="izquierda"
          sx={{ alignItems: "center", textAlign: "center", width: "33%" }}
        >
          <img
            style={{ width: "45%" }}
            src={logoGlobantWhiteGreen01}
            alt="Globant-White-Green-01"
          ></img>
          <Typography>
            All rights reserved Globant {new Date().getFullYear()}
          </Typography>
        </Grid>
        <Grid id="centro" sx={{ textAlign: "center", width: "33%" }}>
          <Typography>Contact Us</Typography>
          <Box sx={{ color: "#9e9e9e" }}>
            <Typography>hi@globant.com</Typography>
            <Typography>+1 877 215 5230</Typography>
          </Box>
        </Grid>
        <Grid
          id="derecha"
          sx={{ alignItems: "center", textAlign: "center", width: "33%" }}
        >
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
    </Grid>
  );
};

export default Footer;
