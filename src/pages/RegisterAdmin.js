import React, { useState } from "react";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";

export default function RegisterAdmin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const authService = new AuthService();

  const register = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alertify.error("Password must be at least 8 characters!", 3);
    } else if (password !== password2) {
      alertify.error("Passwords don't match!", 3);
    } else {
      authService
        .registerAdmin({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then((result) =>
          result.data.success === true
            ? alertify
                .success(
                  "You have successfully registered. Please verify your account with the link sent to your email address.",
                  3
                )
                .then(navigate("/login"))
            : alertify.error(result.data.message, 3)
        );
    }
  };

  return (
    <div className="container mt-5 pt-5" style={{ paddingBottom: "13.95em" }}>
      <div className="row">
        <div className="col-12 col-sm-7 col-md-6 m-auto">
          <div
            className="card border-0 shadow bg-dark"
            style={{ marginTop: "7em" }}
          >
            <div className="card-body">
              <h1 className="text-center text-warning">Register</h1>
              <form onSubmit={register}>
                <input
                  type="text"
                  id="inputFirstName"
                  className="form-control my-4 py-2"
                  placeholder="First Name"
                  aria-describedby="firstNameHelp"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  id="inputLastName"
                  className="form-control my-4 py-2"
                  placeholder="Last Name"
                  aria-describedby="lastNameHelp"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control my-4 py-2"
                  placeholder="Email"
                  aria-describedby="emailHelp"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control my-4 py-2"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  id="inputPassword2"
                  className="form-control my-4 py-2"
                  placeholder="Password Again"
                  required
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <div className="text-center mt-3">
                  <button className="btn btn-warning">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
