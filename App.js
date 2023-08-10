import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from "./About";
import Contact from "./Contact";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";

const App = () => {
  return (
    <Provider store={Appstore}>
      <>
        <Header />

        <Outlet />
      </>
    </Provider>
  );
};

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
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
