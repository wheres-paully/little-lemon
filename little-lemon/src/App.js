import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import About from "./components/About";
import Specials from "./components/Specials";
import Order from "./components/Order";
import Login from "./components/Login";
import ReservationStepOne from './components/ReservationStepOne';
import ReservationStepTwo from './components/ReservationStepTwo';
import ReservationSuccess from './components/ReservationSuccess';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservationstepone" element={<ReservationStepOne />} />
        <Route path="/reservationsteptwo" element={<ReservationStepTwo />} />
        <Route path="/reservationsuccess" element={<ReservationSuccess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;






