import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductService from "../../services/productService";
import CategoryService from "../../services/categoryService";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";

export default function ProductSave() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [stockQuantity, setStockQuantity] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const userState = useSelector((userState) => userState.userReducer);

  let productService = new ProductService();
  let categoryService = new CategoryService();

  useEffect(() => {
    categoryService
      .getAll()
      .then((response) => setCategories(response.data.data));
  }, []);

  const addProduct = (e) => {
    e.preventDefault();

    productService
      .save(
        {
          name: name,
          description: description,
          price: price,
          stockQuantity: stockQuantity,
          category: { id: category },
          supplier: { id: userState?.state?.id },
        },
        userState?.state?.accessToken
      )
      .then((result) =>
        result.data.success === true
          ? alertify
              .success("Product successfully saved.", 3)
              .then(navigate("/my-products"))
          : alertify.error(result.data.message, 3)
      );
  };

  return (
    <div className="container mt-5 pt-5" style={{ paddingBottom: "9.95em" }}>
      <div className="row">
        <div className="col-12 col-sm-7 col-md-6 m-auto">
          <div
            className="card border-0 shadow bg-dark"
            style={{ marginTop: "5em" }}
          >
            <div className="card-body">
              <h1 className="text-center text-warning">Add Product</h1>
              <form onSubmit={addProduct}>
                <input
                  type="text"
                  id="inputName"
                  className="form-control my-4 py-2"
                  placeholder="Product Name"
                  aria-describedby="nameHelp"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  id="inputPrice"
                  className="form-control my-4 py-2"
                  placeholder="Price"
                  aria-describedby="priceHelp"
                  required
                  value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                />
                <input
                  type="number"
                  id="inputStockQuantity"
                  className="form-control my-4 py-2"
                  placeholder="Stock Quantity"
                  aria-describedby="stockQuantityHelp"
                  required
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(parseInt(e.target.value))}
                />
                <select
                  className="form-select mb-4 py-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <textarea
                  className="form-control my-4 py-2"
                  id="inputDescription"
                  rows="5"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Description..."
                  aria-describedby="descriptionHelp"
                  required
                ></textarea>
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
