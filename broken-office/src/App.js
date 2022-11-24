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

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/users";

import UserTicketHistory from "./containers/UserTicketHistory";

import Profile from "./components/Profile";
import SingleTicket from "./components/SingleTicket";

import Photo from "./containers/Photo";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.get("/api/users/me").then((usuario) => {
      dispatch(setUser(usuario.data));
    });
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <NavBar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={!user.email ? <Start /> : <Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createsuccess" element={<></>} />

        {/* User logged routes*/}
        <Route path="/" element={<></>} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/profile/edit" element={<></>} />
        <Route path="/ticket/create" element={<NewTicket />} />
        <Route path="/ticket/history" element={<UserTicketHistory />} />
        <Route path="/ticket/:id" element={<SingleTicket />} />
        <Route path="/photo" element={<Photo />} />

        {/* Admin routes*/}
        <Route path="/admin/*" element={<HomeAdmin />} />
      </Routes>
      {location.pathname === "/" || !user.email ? null : <BottomNav />}
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
