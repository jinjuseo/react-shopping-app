import React from "react";
import styles from "./cart.module.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const Cart = ({ product, setUserItems }) => {
  const onClickPlusBtn = () => {
    setUserItems((prev) => {
      if (prev.id !== product.id) {
        return prev;
      }
    });
    // const newProduct = {
    //   ...product,
    //   count: product.count + 1,
    // };
    // setUserItems((prev) => [...prev, newProduct]);
  };
  const onClickMinusBtn = () => {};
  return (
    <div className={`${styles.cart} w-full flex`}>
      <div className={`${styles.imgContainer}`}>
        <img className={``} src={product?.image} alt={product?.title} />
      </div>
      <div className={`${styles.productDetails}`}>
        <div>
          <h1 className="text-lg text-gray-300 font-bold mb-1">
            {product?.category}
          </h1>
          <span className="text-xl">{product?.title}</span>
        </div>
        <div className="text-base font-base">{`${product?.price} x ${
          product.count
        } = $ ${product?.price * product?.count}`}</div>
      </div>
      <div className={`${styles.countButtons}`}>
        <button className={`${styles.countButton}`}>
          {product?.count > 1 ? "-" : ""}
        </button>
        <button className={`${styles.countButton}`}>{product?.count}</button>
        <button onClick={onClickPlusBtn} className={`${styles.countButton}`}>
          +
        </button>
      </div>
      <button className={styles.deleteBtn}>
        <DeleteOutlineOutlinedIcon />
      </button>
    </div>
  );
};
export default Cart;
