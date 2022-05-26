import axios from "axios";

export default class authService {

  login(email, password) {
    let bodyFormData = new FormData();
    bodyFormData.set("email", email);
    bodyFormData.set("password", password);
    return axios({
      method: "post",
      url: "https://e-commerce-osc.herokuapp.com/api/auth/login",
      data: bodyFormData,
      config: {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      },
    });
  }

  registerCustomer(customer) {
    return axios({
      method: "post",
      url: "https://e-commerce-osc.herokuapp.com/api/v1/auth/register/customer",
      headers: {},
      data: customer,
    });
  }

  registerSupplier(supplier) {
    return axios({
      method: "post",
      url: "https://e-commerce-osc.herokuapp.com/api/v1/auth/register/supplier",
      headers: {},
      data: supplier,
    });
  }

  registerAdmin(admin) {
    return axios({
      method: "post",
      url: "https://e-commerce-osc.herokuapp.com/api/v1/auth/register/admin",
      headers: {},
      data: admin,
    });
  }

  confirmToken(token) {
    return axios({
      method: "get",
      url: `https://e-commerce-osc.herokuapp.com/api/v1/auth/confirm?token=${token}`,
    });
  }
}
