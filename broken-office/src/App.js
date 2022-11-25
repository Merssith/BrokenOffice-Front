import { Box } from "@mui/material";
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

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/users";
import UserTicketHistory from "./containers/UserTicketHistory";
import Profile from "./components/Profile";
import SingleTicket from "./components/SingleTicket";
import Photo from "./containers/Photo";
import { useMediaQuery } from "@mui/material";
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
  return (
    <Box display="flex" flexDirection="column">
      {!isActive ? <NavBarDesktop /> : <NavBar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={!user.email ? <Start /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* User logged routes*/}
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/ticket/create" element={<NewTicket />} />
        <Route path="/ticket/history" element={<UserTicketHistory />} />
        <Route path="/ticket/:id" element={<SingleTicket />} />
        {/* Admin routes*/}
        <Route path="/tickets" element={<AsignedTickets />} />
        <Route path="/tickets/manage/:id" element={<ManageTicket />} />
        <Route path="/tickets/all" element={<ViewTickets />} />
        <Route path="/users/all" element={<ViewUsers />} />
      </Routes>
      {location.pathname === "/" || !user.email || !isActive ? null : (
        <BottomNav />
      )}

      {!isActive ? <Footer /> : null}
    </Box>
  );
}

export default App;
