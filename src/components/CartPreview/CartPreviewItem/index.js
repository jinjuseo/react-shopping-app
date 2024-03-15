import React from "react";
import styles from "./cartPreviewItem.module.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const CartPreviewItem = ({ product, onClickCountBtn, onClickDeleteBtn }) => {
  return (
    <div className={`${styles.cart} w-full flex`}>
      <div className={`${styles.imgContainer}`}>
        <img className={``} src={product?.image} alt={product?.title} />
      </div>
      <div className={`${styles.productDetails}`}>
        <div>
          <h1 className="text-base text-gray-300 font-bold mb-1">
            {product?.category}
          </h1>
          <span className="text-lg">{product?.title}</span>
        </div>
        <div className="text-base font-base">{`${product?.price} x ${
          product.count
        } = $ ${product?.price * product?.count}`}</div>
      </div>

      <button
        onClick={() => onClickDeleteBtn(product)}
        className={styles.deleteBtn}
      >
        <DeleteOutlineOutlinedIcon />
      </button>
    </div>
  );
};
export default CartPreviewItem;
