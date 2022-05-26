import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import alertify from "alertifyjs";

export default function Navi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((userState) => userState.userReducer);

  const Logout = () => {
    navigate("/");
    dispatch(logout()).then(
      alertify.error("You have successfully logged out.")
    );
  };

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
                <NavLink to={"/products"} className="nav-link px-2 text-white">
                  Products
                </NavLink>
              </li>

              {userState?.state?.role === "ROLE_SUPPLIER" ? (
                <li>
                  <NavLink
                    to={"/my-products"}
                    className="nav-link px-2 text-white"
                  >
                    My Products
                  </NavLink>
                </li>
              ) : null}
              {userState?.state?.role === "ROLE_SUPPLIER" ? (
                <li>
                  <NavLink
                    to={"/product-save"}
                    className="nav-link px-2 text-white"
                  >
                    Add Product
                  </NavLink>
                </li>
              ) : null}

              {userState?.state?.role === "ROLE_CUSTOMER" ? (
                <li>
                  <NavLink to={"/cart"} className="nav-link px-2 text-white">
                    Cart
                  </NavLink>
                </li>
              ) : null}

              {userState?.state?.role === "ROLE_ADMIN" ? (
                <NavLink
                  to={"/category-save"}
                  className="nav-link px-2 text-white"
                >
                  Add Category
                </NavLink>
              ) : null}
            </ul>

            <div className="text-end">
              {userState === null || userState?.state === null ? (
                <a
                  className="btn btn-outline-light me-2 btn-md"
                  href="/login"
                  role="button"
                >
                  Login
                </a>
              ) : null}
              {userState === null || userState?.state === null ? (
                <a
                  className="btn btn-warning btn-md"
                  href="/register/customer"
                  role="button"
                >
                  Register
                </a>
              ) : null}
              {userState !== null && userState?.state !== null ? (
                <div
                  className="btn btn-warning btn-md"
                  onClick={() => Logout()}
                  role="button"
                >
                  Logout
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
