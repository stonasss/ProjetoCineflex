import React, { useState } from "react";
import Logo from "./Logo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionsPage from "./SessionsPage";
import ChooseSeats from "./ChooseSeats";
import NowShowing from "./NowShowing";

export default function CineScreen() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(undefined);
  const [movieName, setMovieName] = useState([]);
  const [poster, setPoster] = useState([]);
  const [day, setDay] = useState([]);
  const [time, setTime] = useState([]);

  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route 
          path="/" 
          element={
            <NowShowing 
              movies={movies}
              setMovies={setMovies}
              setMovieId={setMovieId}
              movieName={movieName}
              poster={poster}
              setMovieName={setMovieName}
              setPoster={setPoster}
            />} />
        <Route
          path="/sessoes/:idFilme"
          element={
            <SessionsPage
              movieId={movieId}
              setMovieName={setMovieName}
              setPoster={setPoster}
              setDay={setDay}
              setTime={setTime}
            />} />
        <Route
          path="/assentos/:idFilme"
          element={
            <ChooseSeats
              movieName={movieName}
              poster={poster}
              day={day}
              time={time}
            />} />
      </Routes>
    </BrowserRouter>
  )
}