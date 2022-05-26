import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductService from "../services/productService";
import { useSelector } from "react-redux";

export default function Home() {
  const [products, setProducts] = useState([]);
  const userState = useSelector((userState) => userState.userReducer);

  let productService = new ProductService();

  useEffect(() => {
    productService.getAll().then((response) => setProducts(response.data.data));
  }, []);

  return (
    <div>
      <div className="hero my-3">
        <div className="card bg-dark text-white border-0 ">
          <img
            src="https://img.freepik.com/free-photo/cardboard-shopping-bags_23-2147652051.jpg?w=1380"
            className="card-img"
            alt="Background"
            height="350px"
          />
          <div className="card-img-overlay d-flex hero-header flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0 text-dark">
                YOUR NEW SHOPPING PLACE
              </h5>
              <p className="card-text lead fs-2 text-dark">
                CHECK OUT ALL PRODUCTS
              </p>
              <NavLink
                to="/register/customer"
                className="btn btn-warning px-3 py-2 ms-2"
              >
                Register Now
              </NavLink>
            </div>
          </div>
        </div>

        <div class="container mt-3">
          <div class="row">
            <div class="col-12">
              <h1 class="display-6 fw-bolder text-center dark-text mt-2">
                Latest Products
              </h1>
              <hr />
            </div>
          </div>

          <div class="row d-flex justify-content-center">
            {products[products.length - 1] ? (
              <div
                key={products[products.length - 1].id}
                className="col-md-3 mb-4"
              >
                <div
                  className="card h-100 text-center p-3 bg-dark"
                  key={products[products.length - 1].id}
                >
                  <img
                    src={
                      products[products.length - 1].images.length === 0
                        ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                        : products[products.length - 1].images[
                            products[products.length - 1].images.length - 1
                          ].url
                    }
                    alt={products[products.length - 1].name}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 text-white">
                      {products[products.length - 1].name.length > 15
                        ? products[products.length - 1].name.substring(0, 15) +
                          "..."
                        : products[products.length - 1].name}
                    </h5>
                    <p className="card-text text-white">
                      {products[products.length - 1].description.length > 45
                        ? products[products.length - 1].description.substring(
                            0,
                            45
                          ) + "..."
                        : products[products.length - 1].description}
                    </p>
                    <p className="card-text text-white lead fw-bold">
                      ${products[products.length - 1].price}
                    </p>
                    {userState?.state?.role === "ROLE_SUPPLIER" ||
                    userState?.state?.role === "ROLE_ADMIN" ? (
                      <NavLink
                        to={`/product/${products[products.length - 1].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Details
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/product/${products[products.length - 1].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Buy Now
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
            {products[products.length - 2] ? (
              <div
                key={products[products.length - 2].id}
                className="col-md-3 mb-4"
              >
                <div
                  className="card h-100 text-center p-3 bg-dark"
                  key={products[products.length - 2].id}
                >
                  <img
                    src={
                      products[products.length - 2].images.length === 0
                        ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                        : products[products.length - 2].images[
                            products[products.length - 2].images.length - 1
                          ].url
                    }
                    alt={products[products.length - 2].name}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 text-white">
                      {products[products.length - 2].name.length > 15
                        ? products[products.length - 2].name.substring(0, 15) +
                          "..."
                        : products[products.length - 2].name}
                    </h5>
                    <p className="card-text text-white">
                      {products[products.length - 2].description.length > 45
                        ? products[products.length - 2].description.substring(
                            0,
                            45
                          ) + "..."
                        : products[products.length - 2].description}
                    </p>
                    <p className="card-text text-white lead fw-bold">
                      ${products[products.length - 2].price}
                    </p>
                    {userState?.state?.role === "ROLE_SUPPLIER" ||
                    userState?.state?.role === "ROLE_ADMIN" ? (
                      <NavLink
                        to={`/product/${products[products.length - 2].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Details
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/product/${products[products.length - 2].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Buy Now
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
            {products[products.length - 3] ? (
              <div
                key={products[products.length - 3].id}
                className="col-md-3 mb-4"
              >
                <div
                  className="card h-100 text-center p-3 bg-dark"
                  key={products[products.length - 3].id}
                >
                  <img
                    src={
                      products[products.length - 3].images.length === 0
                        ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                        : products[products.length - 3].images[
                            products[products.length - 3].images.length - 1
                          ].url
                    }
                    alt={products[products.length - 3].name}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 text-white">
                      {products[products.length - 3].name.length > 15
                        ? products[products.length - 3].name.substring(0, 15) +
                          "..."
                        : products[products.length - 3].name}
                    </h5>
                    <p className="card-text text-white">
                      {products[products.length - 3].description.length > 45
                        ? products[products.length - 3].description.substring(
                            0,
                            45
                          ) + "..."
                        : products[products.length - 3].description}
                    </p>
                    <p className="card-text text-white lead fw-bold">
                      ${products[products.length - 3].price}
                    </p>
                    {userState?.state?.role === "ROLE_SUPPLIER" ||
                    userState?.state?.role === "ROLE_ADMIN" ? (
                      <NavLink
                        to={`/product/${products[products.length - 3].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Details
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/product/${products[products.length - 3].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Buy Now
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
            {products[products.length - 4] ? (
              <div
                key={products[products.length - 4].id}
                className="col-md-3 mb-4"
              >
                <div
                  className="card h-100 text-center p-3 bg-dark"
                  key={products[products.length - 4].id}
                >
                  <img
                    src={
                      products[products.length - 4].images.length === 0
                        ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                        : products[products.length - 4].images[
                            products[products.length - 4].images.length - 1
                          ].url
                    }
                    alt={products[products.length - 4].name}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 text-white">
                      {products[products.length - 4].name.length > 15
                        ? products[products.length - 4].name.substring(0, 15) +
                          "..."
                        : products[products.length - 4].name}
                    </h5>
                    <p className="card-text text-white">
                      {products[products.length - 4].description.length > 45
                        ? products[products.length - 4].description.substring(
                            0,
                            45
                          ) + "..."
                        : products[products.length - 4].description}
                    </p>
                    <p className="card-text text-white lead fw-bold">
                      ${products[products.length - 4].price}
                    </p>
                    {userState?.state?.role === "ROLE_SUPPLIER" ||
                    userState?.state?.role === "ROLE_ADMIN" ? (
                      <NavLink
                        to={`/product/${products[products.length - 4].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Details
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/product/${products[products.length - 4].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Buy Now
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
            {products[products.length - 5] ? (
              <div
                key={products[products.length - 5].id}
                className="col-md-3 mb-4"
              >
                <div
                  className="card h-100 text-center p-3 bg-dark"
                  key={products[products.length - 5].id}
                >
                  <img
                    src={
                      products[products.length - 5].images.length === 0
                        ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                        : products[products.length - 5].images[
                            products[products.length - 5].images.length - 1
                          ].url
                    }
                    alt={products[products.length - 5].name}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 text-white">
                      {products[products.length - 5].name.length > 15
                        ? products[products.length - 5].name.substring(0, 15) +
                          "..."
                        : products[products.length - 5].name}
                    </h5>
                    <p className="card-text text-white">
                      {products[products.length - 5].description.length > 45
                        ? products[products.length - 5].description.substring(
                            0,
                            45
                          ) + "..."
                        : products[products.length - 5].description}
                    </p>
                    <p className="card-text text-white lead fw-bold">
                      ${products[products.length - 5].price}
                    </p>
                    {userState?.state?.role === "ROLE_SUPPLIER" ||
                    userState?.state?.role === "ROLE_ADMIN" ? (
                      <NavLink
                        to={`/product/${products[products.length - 5].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Details
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/product/${products[products.length - 5].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Buy Now
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
            {products[products.length - 6] ? (
              <div
                key={products[products.length - 6].id}
                className="col-md-3 mb-4"
              >
                <div
                  className="card h-100 text-center p-3 bg-dark"
                  key={products[products.length - 6].id}
                >
                  <img
                    src={
                      products[products.length - 6].images.length === 0
                        ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                        : products[products.length - 6].images[
                            products[products.length - 6].images.length - 1
                          ].url
                    }
                    alt={products[products.length - 6].name}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 text-white">
                      {products[products.length - 6].name.length > 15
                        ? products[products.length - 6].name.substring(0, 15) +
                          "..."
                        : products[products.length - 6].name}
                    </h5>
                    <p className="card-text text-white">
                      {products[products.length - 6].description.length > 45
                        ? products[products.length - 6].description.substring(
                            0,
                            45
                          ) + "..."
                        : products[products.length - 6].description}
                    </p>
                    <p className="card-text text-white lead fw-bold">
                      ${products[products.length - 6].price}
                    </p>
                    {userState?.state?.role === "ROLE_SUPPLIER" ||
                    userState?.state?.role === "ROLE_ADMIN" ? (
                      <NavLink
                        to={`/product/${products[products.length - 6].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Details
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/product/${products[products.length - 6].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Buy Now
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
            {products[products.length - 7] ? (
              <div
                key={products[products.length - 7].id}
                className="col-md-3 mb-4"
              >
                <div
                  className="card h-100 text-center p-3 bg-dark"
                  key={products[products.length - 7].id}
                >
                  <img
                    src={
                      products[products.length - 7].images.length === 0
                        ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                        : products[products.length - 7].images[
                            products[products.length - 7].images.length - 1
                          ].url
                    }
                    alt={products[products.length - 7].name}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 text-white">
                      {products[products.length - 7].name.length > 15
                        ? products[products.length - 7].name.substring(0, 15) +
                          "..."
                        : products[products.length - 7].name}
                    </h5>
                    <p className="card-text text-white">
                      {products[products.length - 7].description.length > 45
                        ? products[products.length - 7].description.substring(
                            0,
                            45
                          ) + "..."
                        : products[products.length - 7].description}
                    </p>
                    <p className="card-text text-white lead fw-bold">
                      ${products[products.length - 7].price}
                    </p>
                    {userState?.state?.role === "ROLE_SUPPLIER" ||
                    userState?.state?.role === "ROLE_ADMIN" ? (
                      <NavLink
                        to={`/product/${products[products.length - 7].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Details
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/product/${products[products.length - 7].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Buy Now
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
            {products[products.length - 8] ? (
              <div
                key={products[products.length - 8].id}
                className="col-md-3 mb-4"
              >
                <div
                  className="card h-100 text-center p-3 bg-dark"
                  key={products[products.length - 8].id}
                >
                  <img
                    src={
                      products[products.length - 8].images.length === 0
                        ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                        : products[products.length - 8].images[
                            products[products.length - 8].images.length - 1
                          ].url
                    }
                    alt={products[products.length - 8].name}
                    height="250px"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0 text-white">
                      {products[products.length - 8].name.length > 15
                        ? products[products.length - 8].name.substring(0, 15) +
                          "..."
                        : products[products.length - 8].name}
                    </h5>
                    <p className="card-text text-white">
                      {products[products.length - 8].description.length > 45
                        ? products[products.length - 8].description.substring(
                            0,
                            45
                          ) + "..."
                        : products[products.length - 8].description}
                    </p>
                    <p className="card-text text-white lead fw-bold">
                      ${products[products.length - 8].price}
                    </p>
                    {userState?.state?.role === "ROLE_SUPPLIER" ||
                    userState?.state?.role === "ROLE_ADMIN" ? (
                      <NavLink
                        to={`/product/${products[products.length - 8].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Details
                      </NavLink>
                    ) : (
                      <NavLink
                        to={`/product/${products[products.length - 8].id}`}
                        className="btn btn-warning btn-md"
                      >
                        Buy Now
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="text-center">
            <NavLink
              to={"/products"}
              className="btn btn-dark btn-md text-white"
            >
              Show More
            </NavLink>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
