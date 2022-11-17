import * as React from "react";
import { createTheme, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ThemeProvider } from "@emotion/react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//Historial
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate, useParams } from "react-router";
export default function BottomNav() {
  // const params = useParams();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ backgroundColor: "#BFD732", height: "7.1vh" }}>
          <Box sx={{ flexGrow: 0.5 }} />

          <IconButton color="primary">
            <a href="http://localhost:3000">
              <HomeIcon
                sx={{
                  fontSize: "2.5rem",
                  color: "#444444",
                  "&:active": { color: "#696969", transition: "0.1" },
                }}
              />
            </a>
          </IconButton>

          <Box sx={{ flexGrow: 0.5 }} />
          <IconButton color="primary">
            <Link to="/profile">
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
            <Link to="/my-tickets">
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
