import React from "react";

export default function Login() {
  return (
    <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-7 col-md-6 m-auto">
            <div className="card border-0 shadow bg-dark">
              <div className="card-body">
                <h1 className="text-center text-warning">Login</h1>
                <form action="">
                  <input type="email" id="inputEmail" className="form-control my-4 py-2" placeholder="Email" />
                  <input type="password" id="inputPassword" className="form-control my-4 py-2" placeholder="Password" />
                  <div className="text-center mt-3">
                    <button className="btn btn-warning">Login</button>
                    <a href="/register" className="nav-link text-white">Already have an account ?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}