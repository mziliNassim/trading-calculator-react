import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer.jsx";

import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound";

import LotSize from "./components/LotSize";
import Pips from "./components/Pips";
import Profit from "./components/Profit";

const App = () => {
  const location = useLocation();

  // scrool to top smooth
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Navigation />
      <Toaster theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lotsize" element={<LotSize />} />
        <Route path="/pips" element={<Pips />} />
        <Route path="/profit" element={<Profit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
