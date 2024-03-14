import React, { useEffect } from "react";
import styles from "./product.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { myItems, meState } from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const truncate = (str) => {
  return str.slice(0, 15) + "...";
};
const Product = ({ product }) => {
  const user = useRecoilValue(meState);
  const [userItems, setUserItems] = useRecoilState(myItems);
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/product/${product.id}`, {
      state: {
        id: `${product.id}`,
        image: `${product.image}`,
        rating: `${product.rating}`,
        category: `${product.category}`,
        description: `${product.description}`,
        title: `${product.title}`,
        price: `${product.price}`,
      },
      // state: { ...product },
    });
  };
  useEffect(() => {
    // console.log(userItems);
  }, [userItems]);
  const onClickBtn = () => {
    if (user) {
      if (!getCount()) {
        setUserItems((prev) => [...prev, { ...product, count: 1 }]);
        // setUser((prev) => ({...prev, items: [...prev.items, id] }));
      } else {
        navigate("/cart");
      }
    } else {
      navigate("/login");
    }
  };
  const getCount = () => {
    const filtered = userItems.filter((item) => item.id === product.id);
    if (filtered.length > 0) {
      return filtered[0].count;
    }
    return 0;
  };
  return (
    <div className={`${styles.product} p-8`}>
      <img
        onClick={onClick}
        className="w-80 h-50 cursor-pointer"
        src={product.image}
        alt={product.title}
      />
      <span className="text-lg font-semibold">{`${truncate(
        product.title
      )}`}</span>
      <div className="w-full flex ">
        {getCount() ? (
          <button
            onClick={onClickBtn}
            className={`${styles.button} w-1/2 border border-gray-500 text-gray-500 border-solid `}
          >
            <ShoppingCartOutlinedIcon /> {`: ${getCount()}`}
          </button>
        ) : (
          <button
            onClick={onClickBtn}
            className={`${styles.button} w-1/2 border border-gray-500 text-gray-500 border-solid `}
          >
            장바구니에 담기
          </button>
        )}
        <span className={`${styles.price} w-1/2 `}>{`$ ${product.price}`}</span>
      </div>
    </div>
  );
};
export default Product;
