import React from "react";
import { Route, Routes } from "react-router";

const HomeAdmin = () => {
  return (
    <>
      <div>HomeAdmin</div>
      <Routes>
        {/* Admin routes about his profile*/}
        <Route path="/" element={<></>} />
        <Route path="/user/profile" element={<></>} />
        <Route path="/user/profile/edit" element={<></>} />

        <Route path="/ticket/create" element={<></>} />
        <Route path="/ticket/history" element={<></>} />

        {/* Admin routes about users data*/}
        <Route path="/users" element={<></>} />
        <Route path="/users/:id" element={<></>} />
        <Route path="/users/:id/profile/edit" element={<></>} />

        <Route path="/tickets" element={<></>} />
        <Route path="/tickets/:id" element={<></>} />
        <Route path="/tickets/:id/edit" element={<></>} />
      </Routes>
    </>
  );
};

export default HomeAdmin;
