import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductService from "../../services/productService";
import CategoryService from "../../services/categoryService";
import { useSelector } from "react-redux";
import alertify from "alertifyjs";
import ImageProductService from "../../services/imageProductService";

export default function ProductUpdate() {
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [stockQuantity, setStockQuantity] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  const userState = useSelector((userState) => userState.userReducer);

  let productService = new ProductService();
  let categoryService = new CategoryService();
  let imageProductService = new ImageProductService();

  useEffect(() => {
    productService
      .getById(id)
      .then((response) => setProduct(response.data.data));
  }, []);

  useEffect(() => {
    categoryService
      .getAll()
      .then((response) => setCategories(response.data.data));
  }, []);

  const update = (e) => {
    e.preventDefault();

    productService
      .update(
        {
          id: product.id,
          name: name,
          description: description,
          price: price,
          stockQuantity: stockQuantity,
          enabled: product.enabled,
          category: { id: category },
          supplier: { id: userState?.state?.id },
          images: product.images,
        },
        userState?.state?.accessToken
      )
      .then((result) =>
        result.data.success === true
          ? alertify
              .success("Product successfully created.", 3)
              .then(navigate("/"))
          : alertify.error("Something went wrong!", 3)
      );
  };

  const upload = (e) => {
    e.preventDefault();
    imageProductService
      .upload(image, id, userState?.state?.accessToken)
      .then((result) =>
        result.data.success === true
          ? alertify
              .success("Image successfully uploaded.", 3)
              .then(navigate("/"))
          : alertify.error("Something went wrong!", 3)
      );
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
          <div className="col-md-6">
            <img
              src={
                product?.images?.length === 0
                  ? "https://res.cloudinary.com/dfl3sbjog/image/upload/v1648739878/e-commerce.product.photos/no-image-available_yy5ffu.jpg"
                  : product?.images?.[product.images.length - 1]?.url
              }
              alt={product?.name}
              height="500px"
              width="500px"
              className="mb-4"
            />
            <form onSubmit={upload}>
              <h5 className="text-dark">Upload Image:</h5>
              <div className="custom-file">
                <input
                  type="file"
                  className="form-control mb-4"
                  id="customFile"
                  required
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/png, image/jpeg, image/jpg"
                />
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-dark">Upload</button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <form onSubmit={update}>
              <h5 className="text-dark">Product Name:</h5>
              <input
                type="text"
                id="inputName"
                className="form-control mb-4 py-2"
                aria-describedby="nameHelp"
                required
                value={name}
                placeholder={product?.name}
                onChange={(e) => setName(e.target.value)}
              />
              <h5 className="text-dark">Price:</h5>
              <input
                type="number"
                id="inputPrice"
                className="form-control mb-4 py-2"
                aria-describedby="priceHelp"
                required
                value={price}
                placeholder={product?.price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
              <h5 className="text-dark">Stock Quantity:</h5>
              <input
                type="number"
                id="inputStockQuantity"
                className="form-control mb-4 py-2"
                aria-describedby="stockQuantityHelp"
                required
                value={stockQuantity}
                placeholder={product?.stockQuantity}
                onChange={(e) => setStockQuantity(parseInt(e.target.value))}
              />
              <h5 className="text-dark">Category:</h5>
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
              <h5 className="text-dark">Description:</h5>
              <textarea
                className="form-control mb-4 py-2"
                id="inputDescription"
                rows="6"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder={product?.description}
                aria-describedby="descriptionHelp"
                required
              ></textarea>
              <div className="text-center mt-3">
                <button className="btn btn-dark">Update</button>
              </div>
            </form>
            <div className="text-center mt-3" style={{ marginBottom: "0.3em" }}>
              <button
                className="btn btn-danger py-2 px-4"
                onClick={() => remove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
