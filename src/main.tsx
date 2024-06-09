import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { RouterProvider } from "react-router";
import router from "./router/index.tsx";
import Loading from "./components/shared/Loading/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </React.StrictMode>
);
