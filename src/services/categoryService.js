import axios from "axios";

export default class categoryService {
  getAll() {
    return axios.get("https://e-commerce-osc.herokuapp.com/api/v1/categories/getAll");
  }

  save(name, accessToken) {
    return axios({
      method: "post",
      url: "https://e-commerce-osc.herokuapp.com/api/v1/categories/save",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      data: name,
    });
  }
}
