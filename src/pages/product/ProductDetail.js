import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import ProductService from "../../services/productService";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let productService = new ProductService();

  const userState = useSelector((userState) => userState.userReducer);

  useEffect(() => {
    productService
      .getById(id)
      .then((response) => setProduct(response.data.data));
  }, []);

  const addProduct = (product) => {
    dispatch(addToCart(product));
    alertify.success(product.name + " added to cart.");
  };

  const remove = (id) => {
    productService
      .setDisable(id, userState?.state?.accessToken)
      .then((result) =>
        result.data.success === true
          ? alertify
              .success("Product successfully removed.", 3)
              .then(navigate("/"))
          : alertify.error("Something went wrong!", 3)
      );
  };

  return (
    <div>
      <div className="container py-5 ">
        <div className="row py-5">
          <div
            className="col-md-6"
            style={{ marginTop: "5em", paddingBottom: "8.2em" }}
          >
            <img
              src={
                product?.images?.length === 0
                  ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                  : product?.images?.[product.images.length - 1]?.url
              }
              alt={product?.name}
              height="500px"
              width="500px"
              className="mx-5"
            />
          </div>

          <div className="col-md-6">
            <h4
              className="text-uppercase text-dark"
              style={{ marginTop: "5em" }}
            >
              {" "}
              {product?.category?.name}
            </h4>
            <h1 className="display-5">{product?.name}</h1>

            <h3 className="display-6 fw-bold my-4"> ${product?.price}</h3>

            <label className="my-1">
              Stock Quantity: {product?.stockQuantity}
            </label>

            <p className="lead">{product?.description}</p>

            {userState?.state?.role === "ROLE_CUSTOMER" ? (
              <button
                className="btn btn-dark py-2 px-4"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            ) : null}

            {userState?.state?.role === "ROLE_CUSTOMER" ? (
              <NavLink to="/cart" className="btn btn-dark px-3 py-2 ms-2">
                Go to Cart
              </NavLink>
            ) : null}

            {userState?.state?.role === "ROLE_ADMIN" ? (
              <button
                className="btn btn-danger py-2 px-4"
                onClick={() => remove(product.id)}
              >
                Remove
              </button>
            ) : null}

            {!userState?.state?.role ? (
              <NavLink to="/login" className="btn btn-dark py-2 ms-2">
                Login to Buy
              </NavLink>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
