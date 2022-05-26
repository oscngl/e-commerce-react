import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, emptyCart } from "../redux/actions/cartActions";
import { getBasketTotal } from "../redux/reducers/cartReducer";
import alertify from "alertifyjs";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const cartState = useSelector((cartState) => cartState.cartReducer);
  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
    alertify.error(product.name + " removed from cart.");
  };

  const setEmpty = () => {
    dispatch(emptyCart());
    alertify.error("Cart has been emptied.");
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="display-6 fw-bolder text-center dark-text mt-3">
            Cart
          </h1>
          <hr />
          {cartState.length !== 0 ? (
            <div>
              <h4 className="text-end dark-text">
                Total: ${getBasketTotal(cartState)}
                <button
                  className="btn btn-dark px-3 py-2 ms-2"
                  onClick={() => setEmpty()}
                >
                  {" "}
                  Remove All
                </button>
              </h4>
            </div>
          ) : null}
        </div>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{ paddingBottom: "10em" }}
      >
        {cartState.length === 0 ? (
          <div className="text-center">
            <h1
              className="display-6 fw-bolder dark-text mb-3"
              style={{ marginTop: "4em" }}
            >
              Your Cart is Empty
            </h1>
            <NavLink
              to={"/products"}
              className="btn btn-dark"
              style={{ marginBottom: "20em" }}
            >
              Shop Now
            </NavLink>
          </div>
        ) : (
          cartState?.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center p-3 bg-dark" key={item.id}>
                <img
                  src={
                    item?.images?.length === 0
                      ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                      : item?.images?.[item.images.length - 1]?.url
                  }
                  alt={item.name}
                  height="250px"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0 text-white">
                    {item.name.length > 15
                      ? item.name.substring(0, 15) + "..."
                      : item.name}
                  </h5>
                  <p className="card-text text-white">
                    {item.description.length > 45
                      ? item.description.substring(0, 45) + "..."
                      : item.description}
                  </p>
                  <p className="card-text lead fw-bold text-white">
                    ${item.price}
                  </p>
                  <p className="card-text lead fw-bold text-white">
                    X{item.quantity}
                  </p>
                  <div className="text-center mt-3 text-white">
                    <button
                      onClick={() => removeProduct(item)}
                      className="btn btn-warning"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
