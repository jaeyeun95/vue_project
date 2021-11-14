import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://localhost8888",
  baseURL: "https://reqres.in",
});

export default instance;
