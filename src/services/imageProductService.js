import axios from "axios";
import FormData from "form-data";

export default class imageProductService {
  upload(image, productId, accessToken) {
    var formData = new FormData();
    formData.append("image", image);
    formData.append("product_id", productId);
    return axios({
      method: "post",
      url: "https://e-commerce-osc.herokuapp.com/api/v1/images/products/upload",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      data: formData,
    });
  }
}
