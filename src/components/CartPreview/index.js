import React from "react";
import styles from "./cartPreview.module.scss";
import { useRecoilState } from "recoil";
import CartPreviewItem from "./CartPreviewItem";
import { myItems } from "../../recoil";
import { Link, useNavigate } from "react-router-dom";
const CartPreview = ({ className, style, setShowPreview }) => {
  const [userItems, setUserItems] = useRecoilState(myItems);
  const navigate = useNavigate();
  const totalPrice = () => {
    let total = 0;
    userItems.map((item) => {
      total += item.price * item.count;
    });
    return total;
  };
  // const onClick = (e) => {
  //   console.log(e);
  //   return () => navigate("/cart");
  // };
  const onClickCountBtn = (product, type) => {
    const itemId = userItems.findIndex((item) => item.id === product.id);
    const newItem = {
      ...product,
      count: type === "plus" ? product.count + 1 : product.count - 1,
    };
    const newUserItems = [...userItems];
    newUserItems[itemId] = newItem;
    setUserItems(newUserItems);
  };
  const onClickDeleteBtn = (product) => {
    const newUserItems = userItems.filter((item) => item.id !== product.id);
    setUserItems(newUserItems);
  };
  return (
    <section style={style} className={`${styles.cart} ${className}`}>
      <div className="w-full h-2/3 flex flex-col overflow-y-auto">
        {userItems.map((item) => (
          <CartPreviewItem
            product={item}
            key={item.id}
            onClickCountBtn={onClickCountBtn}
            onClickDeleteBtn={onClickDeleteBtn}
          />
        ))}
      </div>
      <div className="w-full flex justify-between gap-x-4">
        <div className="text-center w-40 p-3 bg-yellow-500 text-lg font-bold">{`합계 : $ ${totalPrice().toFixed(
          2
        )}`}</div>
        <Link to="/cart" onClick={() => setShowPreview(false)}>
          <button className={styles.cartBtn}>장바구니로 이동</button>
        </Link>
      </div>
    </section>
  );
};

export default CartPreview;
