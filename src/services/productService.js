import axios from "axios";

export default class productService {
  getAll() {
    return axios.get("https://e-commerce-osc.herokuapp.com/api/v1/products/getAll");
  }

  getById(id) {
    return axios.get(`https://e-commerce-osc.herokuapp.com/api/v1/products/getById?id=${id}`);
  }

  getAllBySupplierId(supplierId) {
    return axios.get(
      `https://e-commerce-osc.herokuapp.com/api/v1/products/getAllBySupplierId?supplierId=${supplierId}`
    );
  }

  getAllByCategoryId(categoryId) {
    return axios.get(
      `https://e-commerce-osc.herokuapp.com/api/v1/products/getAllByCategoryId?categoryId=${categoryId}`
    );
  }

  save(product, accessToken) {
    return axios({
      method: "post",
      url: "https://e-commerce-osc.herokuapp.com/api/v1/products/save",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      data: product,
    });
  }

  update(product, accessToken) {
    return axios({
      method: "put",
      url: "https://e-commerce-osc.herokuapp.com/api/v1/products/update",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      data: product,
    });
  }

  setDiasaaable(id) {
    return axios.get(
      `https://e-commerce-osc.herokuapp.com/api/v1/products/setDisable?id=${id}`
    );
  }

  setDisable(id, accessToken) {
    return axios({
      method: "put",
      url: `https://e-commerce-osc.herokuapp.com/api/v1/products/setDisable?id=${id}`,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  }
}
