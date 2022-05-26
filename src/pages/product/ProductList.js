import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductService from "../../services/productService";

function ProductList() {
  const [products, setProducts] = useState([]);

  const categoryState = useSelector(
    (categoryState) => categoryState.categoryReducer
  );

  const userState = useSelector((userState) => userState.userReducer);

  let productService = new ProductService();

  useEffect(() => {
    if (categoryState === null || categoryState?.state === null) {
      productService.getAll().then((result) => setProducts(result.data.data));
    } else {
      productService
        .getAllByCategoryId(categoryState?.state?.id)
        .then((result) => setProducts(result.data.data));
    }
  }, [categoryState]);

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 mb-4">
          {categoryState === null || categoryState?.state === null ? (
            <div>
              <h1 className="display-6 fw-bolder text-center dark-text">
                Products
              </h1>
              <hr />
            </div>
          ) : (
            <div>
              <h1 className="display-6 fw-bolder text-center dark-text">
                Products - {categoryState?.state?.name}
              </h1>
              <hr />
            </div>
          )}
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
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
              <div className="card-body">
                <h5 className="card-title mb-0 text-white">
                  {product.name.length > 12
                    ? product.name.substring(0, 12) + "..."
                    : product.name}
                </h5>
                <p className="card-text text-white">
                  {product.description.length > 40
                    ? product.description.substring(0, 40) + "..."
                    : product.description}
                </p>
                <p className="card-text lead fw-bold text-white">
                  ${product.price}
                </p>

                {userState?.state?.role === "ROLE_SUPPLIER" ||
                userState?.state?.role === "ROLE_ADMIN" ? (
                  <NavLink
                    to={`/product/${product.id}`}
                    className="btn btn-warning btn-md"
                  >
                    Details
                  </NavLink>
                ) : (
                  <NavLink
                    to={`/product/${product.id}`}
                    className="btn btn-warning btn-md"
                  >
                    Buy Now
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
