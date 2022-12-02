import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import DarkModeButtton from "./DarkModeButtton";

const navColor = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#bfd732",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function NavBar() {
  return (
    <>
      <ThemeProvider theme={navColor}>
        <AppBar sx={{ zIndex: "1" }}>
          <Toolbar>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100vw",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", "&:active": { color: "#696969" } }}
                variant="h6"
              >
                BROKEN OFFICE
              </Typography>
              <DarkModeButtton/>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <div style={{ marginTop: "5rem" }}></div>
    </>
  );
}

export default NavBar;
