import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import DarkModeButtton from "./DarkModeButtton";
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

function NavBarDesktop() {
  const user = useSelector((state) => state.user);
  const isHome = useMatch("/");
  if (user.email && !isHome) {
    return (
      <>
        <AppBar position="fixed" color="primary">
          <Toolbar
            sx={{ backgroundColor: "#BFD732", height: "7.vh", color: "#444444" }}
          >
            <Box sx={{ flexGrow: 0 }} />
            <Link style={{textDecoration: 'none', color:'black'}} to="/"><Typography variant="h6">BROKEN OFFICE</Typography></Link>
  
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
            <DarkModeButtton />
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "5rem" }}></div>
      </>
    );
  } else {
    return ( <>
      <AppBar position="fixed" color="primary">
        <Toolbar
          sx={{ display:'flex', flexDirection: 'row', justifyContent:'center', backgroundColor: "#BFD732", height: "7.vh", color: "#444444" }}
        >
          <Box sx={{ flexGrow: 0 }} />
          <Typography sx={{mr:'10px'}}variant="h6">BROKEN OFFICE</Typography>

          <DarkModeButtton />
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "10rem" }}></div>
    </>
)
  }

  
}

export default NavBarDesktop;
