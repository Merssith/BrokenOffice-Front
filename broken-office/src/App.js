import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import HomeAdmin from "./containers/HomeAdmin";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
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
