import React from "react";
import styles from "./product.module.scss";
import { Link, useNavigate } from "react-router-dom";
const truncate = (str) => {
  return str.slice(0, 15) + "...";
};
const Product = ({
  image,
  id,
  rating,
  category,
  description,
  title,
  price,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/product/${id}`, {
      state: {
        image: `${image}`,
        rating: `${rating}`,
        category: `${category}`,
        description: `${description}`,
        title: `${title}`,
        price: `${price}`,
      },
    });
  };

  return (
    <div onClick={onClick} className={`${styles.product} p-8`}>
      <img className="w-80 h-50" src={image} alt={title} />
      <span className="text-lg font-semibold">{`${truncate(title)}`}</span>
      <div className="w-full flex ">
        <button
          className={`${styles.button} w-1/2 border border-gray-500 text-gray-500 border-solid `}
        >
          장바구니에 담기
        </button>
        <span className={`${styles.price} w-1/2 `}>{`$ ${price}`}</span>
      </div>
    </div>
  );
};
export default Product;
