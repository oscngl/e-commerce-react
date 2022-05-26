import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryService from "../services/categoryService";
import alertify from "alertifyjs";
import { useNavigate } from "react-router-dom";

export default function CategorySave() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const userState = useSelector((userState) => userState.userReducer);

  let categoryService = new CategoryService();

  const save = (e) => {
    e.preventDefault();
    categoryService
      .save(name, userState?.state?.accessToken)
      .then((result) =>
        result.data.success == true
          ? alertify
              .success("Category created successfully.", 3)
              .then(navigate("/products"))
          : alertify.error(result.data.message, 3)
      );
  };

  return (
    <div className="container mt-5 pt-5" style={{ paddingBottom: "27.45em" }}>
      <div className="row" style={{ marginTop: "10em" }}>
        <div className="col-12 col-sm-7 col-md-6 m-auto">
          <div className="card border-0 shadow bg-dark">
            <div className="card-body">
              <h1 className="text-center text-warning">Add Category</h1>
              <form onSubmit={save}>
                <input
                  type="text"
                  id="inputName"
                  className="form-control my-4 py-2"
                  placeholder="Category Name"
                  aria-describedby="nameHelp"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="text-center mt-3">
                  <button className="btn btn-warning">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
