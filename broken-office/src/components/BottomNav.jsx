import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router";

export default function BottomNav() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ backgroundColor: "#BFD732", height: "7.vh" }}>
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
    </React.Fragment>
  );
}
