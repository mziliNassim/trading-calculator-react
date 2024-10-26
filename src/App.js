import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import LotSize from "./components/LotSize";
import Pips from "./components/Pips";
import Profit from "./components/Profit";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Home />
      </>
    ),
  },
  {
    path: "/lotsize",
    element: (
      <>
        <Navigation />
        <LotSize />
      </>
    ),
  },
  {
    path: "/pips",
    element: (
      <>
        <Navigation />
        <Pips />
      </>
    ),
  },
  {
    path: "/profit",
    element: (
      <>
        <Navigation />
        <Profit />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navigation />
        <NotFound />
      </>
    ),
    errorElement: <NotFound />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
