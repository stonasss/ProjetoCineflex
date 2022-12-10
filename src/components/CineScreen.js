import React from "react";
import Logo from "./Logo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionsPage from "./SessionsPage";
import ChooseSeats from "./ChooseSeats";
import NowShowing from "./NowShowing";

export default function CineScreen() {

  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path="/" element={<NowShowing />} />
        <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
        <Route path="/assentos/:idSessao" element={<ChooseSeats />} />
      </Routes>
    </BrowserRouter>
  )
}