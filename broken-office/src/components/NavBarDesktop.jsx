import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import DarkModeButtton from "./DarkModeButtton";

function NavBarDesktop() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar
          sx={{ backgroundColor: "#BFD732", height: "7.vh", color: "#444444" }}
        >
          <Box sx={{ flexGrow: 0 }} />
          <Typography variant="h6">BROKEN OFFICE</Typography>
          <DarkModeButtton/>
          <Box sx={{ flexGrow: 0.5 }} />
          <IconButton color="primary">
            <Link to="/">
              <HomeIcon
                sx={{
                  fontSize: "2.5rem",
                  color: "#444444",
                  "&:active": { color: "#696969", transition: "0.1" },
                }}
              />
              {/* <Typography sx={{ position: "fixed", mb: "50px" }} variant="h6">
                HOME
              </Typography> */}
            </Link>
          </IconButton>
          <Box sx={{ flexGrow: 0.5 }} />
          <IconButton color="primary">
            <Link to="/user/profile">
              <AccountCircleIcon
                sx={{
                  fontSize: "2.5rem",
                  color: "#444444",
                  "&:active": { color: "#696969", transition: "0.1" },
                }}
              />
            </Link>
          </IconButton>
          <Box sx={{ flexGrow: 0.5 }} />
          <IconButton color="primary">
            <Link to="/ticket/history">
              <ArticleIcon
                sx={{
                  fontSize: "2.5rem",
                  color: "#444444",
                  "&:active": { color: "#696969", transition: "0.1" },
                }}
              />
            </Link>
          </IconButton>
          <Box sx={{ flexGrow: 0.5 }} />
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "5rem" }}></div>
    </>
  );
}

export default NavBarDesktop;
