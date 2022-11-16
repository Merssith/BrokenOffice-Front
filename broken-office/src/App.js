import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomeAdmin from "./containers/HomeAdmin";

function App() {
  return (
    <Box display="flex" flexDirection="column">
      <NavBar />

      <footer>
        <BottomNav />
      </footer>

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<></>} />
        <Route path="/signin" element={<></>} />
        <Route path="/register" element={<></>} />
        <Route path="/createsuccess" element={<></>} />

        {/* User logged routes*/}
        <Route path="/" element={<></>} />
        <Route path="/user/profile" element={<></>} />
        <Route path="/user/profile/edit" element={<></>} />
        <Route path="/ticket/create" element={<></>} />
        <Route path="/ticket/history" element={<></>} />
        <Route path="/ticket/:id" element={<></>} />

        {/* Admin routes*/}
        <Route path="/admin/*" element={<HomeAdmin />} />
      </Routes>
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
