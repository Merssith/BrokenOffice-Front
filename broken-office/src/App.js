import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import HomeAdmin from "./containers/HomeAdmin";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./store/users";
import Profile from "./components/Profile";

function App() {
  const dispatch = useDispatch();
  const pathName = window.location.pathname;

  useEffect(() => {
    axios.get("http://localhost:3001/api/users/me").then((usuario) => {
      dispatch(setUser(usuario.data));
    });
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <NavBar />
      {pathName === "/" ? null : (
        <footer>
          <BottomNav />
        </footer>
      )}

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
        <Route path="/ticket/history" element={<></>} />
        <Route path="/ticket/:id" element={<></>} />

        {/* Admin routes*/}
        <Route path="/admin/*" element={<HomeAdmin />} />
      </Routes>
      <BottomNav />
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
