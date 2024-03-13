import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { axios } from "../../api/axios";
// import requests from "../../api/requests";
import styles from "./detailPage.module.scss";

const DetailPage = () => {
  const location = useLocation();
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct({ ...location.state });
  }, [location]);

  return (
    <section className={`${styles.section} w-full`}>
      <div className={`${styles.imgContainer}`}>
        <img className={``} src={product?.image} alt={product?.title} />
      </div>
      <div className={`${styles.productDetails}`}>
        <div>
          <h1 className="text-2xl text-gray-300 font-bold mb-6">
            {product?.category}
          </h1>
          <span className="text-3xl">{product?.title}</span>
        </div>
        <div className="text-4xl font-extrabold">$ {product?.price}</div>
        <div className="text-base text-gray-400 font-semibold">
          {product?.description}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>장바구니에 담긴 상품</button>
          <button className={styles.button}>장바구니로 이동</button>
        </div>
      </div>
    </section>
  );
};
export default DetailPage;
