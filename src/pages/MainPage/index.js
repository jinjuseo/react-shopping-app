import React, { useState, useEffect } from "react";
import styles from "./mainPage.module.scss";
import { Product } from "../../components";
import { axios } from "../../api/axios";
import requests from "../../api/requests";
const getFetchType = (type) => {
  switch (type) {
    case "all":
      return requests.fetchAll;
    case "electronics":
      return requests.fetchElectronics;
    case "jewelery":
      return requests.fetchJewelery;
    case "mans":
      return requests.fetchMans;
    case "womens":
      return requests.fetchWomens;
    default:
      return requests.fetchAll;
  }
};
const MainPage = () => {
  const [type, setType] = useState("all");
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(getFetchType(type));
    setProducts(response.data);
  };
  useEffect(() => {
    fetchData();
  }, [type]);
  return (
    <section className={`${styles.products} w-full`}>
      <h1 className="text-3xl font-bold">Products</h1>
      <div className={`${styles.categoriesContainer}`}>
        <button
          onClick={() => {
            setType("all");
          }}
          className={`${styles.category} ${type === "all" && styles.active}`}
        >
          모두{" "}
        </button>
        <button
          onClick={() => {
            setType("electronics");
          }}
          // className={styles.category}
          className={`${styles.category} ${
            type === "electronics" && styles.active
          }`}
        >
          전자제품
        </button>
        <button
          onClick={() => {
            setType("jewelery");
          }}
          // className={styles.category}
          className={`${styles.category} ${
            type === "jewelery" && styles.active
          }`}
        >
          쥬얼리
        </button>
        <button
          onClick={() => {
            setType("mans");
          }}
          // className={styles.category}
          className={`${styles.category} ${type === "mans" && styles.active}`}
        >
          남성의류
        </button>
        <button
          onClick={() => {
            setType("womens");
          }}
          // className={styles.category}
          className={`${styles.category} ${type === "womens" && styles.active}`}
        >
          여성의류
        </button>
      </div>
      <div className={`${styles.container} w-full`}>
        <span className="w-full text-left text-base text-gray-500">{`Showing : ${products?.length} items`}</span>
        <div className={`${styles.productsContainer} w-full`}>
          {products &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
