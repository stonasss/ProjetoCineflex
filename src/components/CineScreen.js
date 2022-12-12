import React, { useState } from "react";
import Logo from "./Logo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionsPage from "./SessionsPage";
import ChooseSeats from "./ChooseSeats";
import NowShowing from "./NowShowing";
import FinalOrder from "./FinalOrder.js"

export default function CineScreen() {
  const [order, setOrder] = useState([]);

  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path="/" element={<NowShowing />} />
        <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
        <Route path="/assentos/:idSessao" element={<ChooseSeats setOrder={setOrder}/>} />
        <Route path="/sucesso" element={<FinalOrder order={order}/>} />
      </Routes>
    </BrowserRouter>
  )
}