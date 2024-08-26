import Home from "@/components/Home";
import Layout from "@/layout/Layout";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default Router;
