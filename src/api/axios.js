import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  //   params: {
  //     api_key: "018d7ccf8d538d4bfa744881cc7d8d79",
  //     language: "ko-KR",
  //   },
});

export { instance as axios };
// 'https://fakestoreapi.com/products/id'
