import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { axios } from "../../api/axios";
// import requests from "../../api/requests";
import styles from "./detailPage.module.scss";
import { myItems, meState } from "../../recoil";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { InsertChart } from "@mui/icons-material";

const DetailPage = () => {
  const user = useRecoilValue(meState);
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [userItems, setUserItems] = useRecoilState(myItems);
  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    setProduct({ ...location.state });
  }, [location]);
  useEffect(() => {
    isInCart();
  }, [product, userItems]);

  const onClickBtn = () => {
    if (user) {
      if (!inCart) {
        setUserItems((prev) => [...prev, { ...product, count: 1 }]);
      }
    } else {
      navigate("/login");
    }
  };
  const isInCart = () => {
    const filtered = userItems.filter((item) => item.id === product.id);
    if (filtered.length > 0) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  };

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
          {inCart ? (
            <button className={styles.button}>장바구니에 담긴 상품</button>
          ) : (
            <button onClick={onClickBtn} className={styles.cartBtn}>
              장바구니에 담기
            </button>
          )}

          <button onClick={() => navigate("/cart")} className={styles.button}>
            장바구니로 이동
          </button>
        </div>
      </div>
    </section>
  );
};
export default DetailPage;
