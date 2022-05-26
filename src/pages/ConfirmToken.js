import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AuthService from "../services/authService";

export default function ConfirmToken() {
  const [message, setMessage] = useState();
  const { token } = useParams();

  let authService = new AuthService();

  useEffect(() => {
    authService
      .confirmToken(token)
      .then((result) => setMessage(result.data.message));
  }, []);

  return (
    <div>
      <div
        className="text-center"
        style={{ height: "100vh", marginTop: "20em" }}
      >
        {message == "Confirmed." ? (
          <div>
            <h3> Your account has been successfully confirmed. </h3>
            <br />
            <NavLink to={"/login"} className="btn btn-dark btn-md text-white">
              Click to Login
            </NavLink>
          </div>
        ) : (
          <div>
            <h3> {message} </h3>
            <h3> Please re-register.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
