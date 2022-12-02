import { Box, CssBaseline } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes, useLocation } from "react-router";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import HomeAdmin from "./containers/HomeAdmin";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NewTicket from "./components/NewTicket";
import Start from "./components/Start";
import AsignedTickets from "./components/Admin/AsignedTickets";
import ManageTicket from "./components/Admin/ManageTicket";
import ViewTickets from "./components/SuperAdmin/ViewTickets";
import ViewUsers from "./components/SuperAdmin/ViewUsers";
import ProfileView from "./components/SuperAdmin/ProfileView";
import TicketView from "./components/SuperAdmin/TicketView";
import Map from "./components/Map";


import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/users";
import UserTicketHistory from "./containers/UserTicketHistory";
import Profile from "./components/Profile";
import SingleTicket from "./components/SingleTicket";
import Photo from "./containers/Photo";
import { useMediaQuery, Container } from "@mui/material";
import NavBarDesktop from "./components/NavBarDesktop";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.get("/api/users/me").then((usuario) => {
      dispatch(setUser(usuario.data));
    });
  }, []);

  const isActive = useMediaQuery("(max-width: 800px)");

  const darkMode = useSelector((state) => state.theme);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    // palette: {
    //   mode: "ligth" ,
    // },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        // sx={{ margin: "0px", padding: "0px" }}
        display="flex"
        flexDirection="column"
      >
        {!isActive ? <NavBarDesktop/> : <NavBar/>}
        <Container flex={1} sx={{ minHeight: "100vh" }}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={!user.email ? <Start /> : <Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* User logged routes*/}
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/ticket/create" element={<NewTicket />} />
            <Route path="/ticket/history/*" element={<UserTicketHistory />} />
            <Route path="/ticket/:id" element={<SingleTicket />} />
            {/* Admin routes*/}
            <Route path="/tickets" element={<AsignedTickets />} />
            <Route path="/tickets/manage/:id" element={<ManageTicket />} />
            <Route path="/tickets/all" element={<ViewTickets />} />
            <Route path="/users/all" element={<ViewUsers />} />
            <Route path="/users/:id" element={<ProfileView />} />
            <Route path="/tickets/:id" element={<TicketView />} />
            <Route path="/map" element={<Map />} />
          </Routes>
          {location.pathname === "/" || !user.email || !isActive ? null : (
            <BottomNav />
          )}
        </Container>
        {!isActive ? <Footer /> : null}
      </Box>
    </ThemeProvider>
  );
}

export default App;
