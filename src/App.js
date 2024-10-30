import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import LotSize from "./components/LotSize";
import Pips from "./components/Pips";
import Profit from "./components/Profit";

const PageContent = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContent />,
    children: [
      {
        index: true,
        element: <LotSize />,
      },
      {
        path: "lotsize",
        element: <LotSize />,
      },
      {
        path: "pips",
        element: <Pips />,
      },
      {
        path: "profit",
        element: <Profit />,
      },
      {
        path: "*",
        element: <NotFound />,
        errorElement: <NotFound />,
      },
    ],
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
