import React from "react";
import FrontPage from "./components/FrontPage";
import Logo from "./components/Logo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionsPage from "./components/SessionsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Logo />
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/sessoes/:idFilme" element={<SessionsPage/>} />
        </Routes>
    </BrowserRouter>
  )
}