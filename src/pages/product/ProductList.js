import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductService from "../../services/productService";

function ProductList() {
  const [products, setProducts] = useState([]);

  let productService = new ProductService();

  useEffect(() => {
    productService.getAll().then((result) => setProducts(result.data.data));
  }, []);

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center dark-text">
            Products
          </h1>
          <hr />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 text-center p-3" key={product.id}>
              <img
                src={
                  product.images.length === 0
                    ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                    : product.images[0].url
                }
                alt={product.name}
                height="250px"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.name.length > 12
                    ? product.name.substring(0, 12) + "..."
                    : product.name}
                </h5>
                <p class="card-text">
                  {product.description.length > 50
                    ? product.description.substring(0, 50) + "..."
                    : product.description}
                </p>
                <p className="card-text lead fw-bold">${product.price}</p>
                <NavLink
                  to={`/product/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
