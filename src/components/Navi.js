import React from "react";
import { NavLink } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to={"/"} className="nav-link px-2 text-warning">
                  E-Commerce
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="nav-link px-2 text-white">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="nav-link px-2 text-white">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="nav-link px-2 text-white">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="nav-link px-2 text-white">
                  Products
                </NavLink>
              </li>
            </ul>

            <div className="text-end">
              <a
                className="btn btn-outline-light me-2 btn-md"
                href="/login"
                role="button"
              >
                Login
              </a>
              <a
                className="btn btn-warning btn-md"
                href="/register"
                role="button"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
