import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="container-fluid header shadow p-3 mb-5 bg-body-tertiary">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-6">
              <h1>welcome</h1>
            </div>
            <div className="col-lg-6 links">
              <div className="link">
                <Link to="/">home</Link>
              </div>
              <div className="link">
                <Link to="/about">about</Link>
              </div>
              <div className="link">
                <Link to="/contact">Contact</Link>
              </div>
              <div>
                <div>cart-({cartItems.length}items)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
