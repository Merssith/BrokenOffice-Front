import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import HomeAdmin from "./containers/HomeAdmin";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./store/users";

import UserTicketHistory from "./containers/UserTicketHistory";

import Profile from "./components/Profile";

function App() {
  const [path, setPath] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setPath(window.location.pathname);
  //   console.log(path);
  // }, []);

  useEffect(() => {
    axios.get("/api/users/me").then((usuario) => {
      console.log(usuario.data);
      dispatch(setUser(usuario.data));
    });
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <NavBar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createsuccess" element={<></>} />

        {/* User logged routes*/}
        <Route path="/" element={<></>} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/profile/edit" element={<></>} />
        <Route path="/ticket/create" element={<></>} />
        <Route path="/ticket/history" element={<UserTicketHistory />} />
        <Route path="/ticket/:id" element={<></>} />

        {/* Admin routes*/}
        <Route path="/admin/*" element={<HomeAdmin />} />
      </Routes>
      {/* {path === "/" || "/login" || "/register" ? null : <BottomNav />} */}
      <BottomNav />
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
