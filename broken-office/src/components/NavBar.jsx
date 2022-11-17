import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

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
        <AppBar>
          <Toolbar>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100vw",
              }}
            >
              <Typography
                sx={{
                  "&:active": { color: "#696969" },
                }}
                variant="h6"
              >
                BROKEN OFFICE
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <div style={{ marginTop: "5rem" }}></div>
    </>
  );
}

export default NavBar;
