import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import AboutUs from "./Pages/AboutUs";
import Reservation from "./Pages/Reservation";
import Order from "./Pages/Order";
import Contact from "./Pages/Contact";
// import Event from "./Pages/Event";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/event" element={<Event />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
