import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductService from "../../services/productService";
import { useSelector } from "react-redux";

export default function MyProducts() {
  const [products, setProducts] = useState([]);
  const userState = useSelector((userState) => userState.userReducer);

  let productService = new ProductService();

  useEffect(() => {
    productService
      .getAllBySupplierId(userState?.state?.id)
      .then((response) => setProducts(response.data.data));
  }, []);

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="display-6 fw-bolder text-center dark-text">
            My Products
          </h1>
          <hr />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {products.length === 0 ? (
          <h1 className="display-6 fw-bolder text-center dark-text">
            You do not have any product for sale
            <div>
              <NavLink
                to={"/product-save"}
                className="btn btn-dark btn-md my-4"
              >
                Click to Create One
              </NavLink>
            </div>
          </h1>
        ) : (
          products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div
                className="card h-100 text-center p-3 bg-dark"
                key={product.id}
              >
                <img
                  src={
                    product.images.length === 0
                      ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                      : product.images[product.images.length - 1].url
                  }
                  alt={product.name}
                  height="250px"
                  className="card-img-top"
                />
                description
                <div className="card-body">
                  <h5 className="card-title mb-0 text-white">
                    {product.name.length > 15
                      ? product.name.substring(0, 15) + "..."
                      : product.name}
                  </h5>
                  <p className="card-text text-white">
                    {product.description.length > 45
                      ? product.description.substring(0, 45) + "..."
                      : product.description}
                  </p>
                  <p className="card-text text-white lead fw-bold">
                    ${product.price}
                  </p>
                  <NavLink
                    to={`/product/${product.id}/edit`}
                    className="btn btn-warning btn-md"
                  >
                    Edit
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <br />
    </div>
  );
}
