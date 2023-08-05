import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "body",
        element: <Body />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
