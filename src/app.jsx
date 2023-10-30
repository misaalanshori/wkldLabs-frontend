import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './app.css'

import Mainlayout from "./layouts/Main";
import Homepage from "./pages/Home/Homepage";
import Login from "./pages/Login/Login.jsx";
import Jadwal from "./pages/Jadwal/Jadwal";

import JadwalRuangan from "./pages/JadwalRuangan/JadwalRuangan";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Mainlayout/>}>
          <Route index element={<Homepage />} />
          <Route path="roomschedule" element={<JadwalRuangan />} />
          <Route path="schedule" element={<Jadwal />} />
          <Route path="*" element={<h1 class="w-full text-center text-3xl my-auto">404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
