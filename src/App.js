import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
// import Home from "./components/Home";
import NotFound from "./components/NotFound";
import LotSize from "./components/LotSize";
import Pips from "./components/Pips";
import Profit from "./components/Profit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LotSize />} />
          <Route path="/lotsize" element={<LotSize />} />
          <Route path="/pips" element={<Pips />} />
          <Route path="/profit" element={<Profit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
