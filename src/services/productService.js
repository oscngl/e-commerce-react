import axios from "axios"

export default class productService {
  
    getAll() {
        return axios.get("http://localhost:8080/api/v1/products/getAll")
    }

}
