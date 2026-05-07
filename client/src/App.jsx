import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Footer from "./components/Footer";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import Addcar from "./pages/owner/Addcar";
import ManageCars from "./pages/owner/ManageCars";
import Managebookings from "./pages/owner/Managebookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isownerpath = useLocation().pathname.startsWith("/owner");
  return (
    <>
      {!isownerpath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<Addcar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<Managebookings />} />
        </Route>
      </Routes>
      {!isownerpath && <Footer />}
    </>
  );
};

export default App;
