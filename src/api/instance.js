import axios from "axios";

const instance = axios.create({
  baseURL: "https://6193c901221e680017450be7.mockapi.io/",
});
export default instance;
