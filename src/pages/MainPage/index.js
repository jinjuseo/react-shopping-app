import React, { useState, useEffect } from "react";
import styles from "./mainPage.module.scss";
import { Product } from "../../components";
import { axios } from "../../api/axios";
import requests from "../../api/requests";

const MainPage = () => {
  const [type, setType] = useState(requests.fetchAll);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(type);
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
            setType(requests.fetchAll);
          }}
          className={styles.category}
        >
          모두{" "}
        </button>
        <button
          onClick={() => {
            setType(requests.fetchElectronics);
          }}
          className={styles.category}
        >
          전자제품
        </button>
        <button
          onClick={() => {
            setType(requests.fetchJewelery);
          }}
          className={styles.category}
        >
          쥬얼리
        </button>
        <button
          onClick={() => {
            setType(requests.fetchMans);
          }}
          className={styles.category}
        >
          남성의류
        </button>
        <button
          onClick={() => {
            setType(requests.fetchWomens);
          }}
          className={styles.category}
        >
          여성의류
        </button>
      </div>
      <div className={`${styles.container} w-full`}>
        <span className="w-full text-left text-base text-gray-500">{`Showing : ${products?.length} items`}</span>
        <div className={`${styles.productsContainer} w-full`}>
          {products &&
            products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
