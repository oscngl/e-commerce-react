import axios from "axios";

export default class userService {
  getByEmail(email) {
    return axios({
      method: "get",
      url: `https://e-commerce-osc.herokuapp.com/api/v1/users/getByEmail?email=${email}`,
    });
  }
}
