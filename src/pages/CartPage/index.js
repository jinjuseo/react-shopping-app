import React, { useEffect } from "react";
import styles from "./cartPage.module.scss";
import { useRecoilState } from "recoil";
import { myItems } from "../../recoil";
import { Cart } from "../../components";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartPage = () => {
  const [userItems, setUserItems] = useRecoilState(myItems);
  const totalPrice = () => {
    let total = 0;
    userItems.map((item) => {
      total += item.price * item.count;
    });
    return total;
  };
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
  const onClickPayBtn = () => {
    setUserItems([]);
  };
  return (
    <section className={`${styles.cart} w-full`}>
      <h1 className="text-3xl font-bold">Cart</h1>
      {userItems.length > 0 ? (
        <div className="w-full flex flex-col">
          {userItems.map((item) => (
            <Cart
              product={item}
              key={item.id}
              onClickCountBtn={onClickCountBtn}
              onClickDeleteBtn={onClickDeleteBtn}
            />
          ))}
          <div className="w-full flex justify-end mt-20 gap-x-4">
            <div className="text-center w-48 p-4 bg-yellow-500 text-lg font-bold">{`합계 : $ ${totalPrice().toFixed(
              2
            )}`}</div>
            <button
              onClick={onClickPayBtn}
              className="flex justify-center w-32 p-4 text-gray-400 font-bold border border-gray-400 border-2"
            >
              계산하기
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <ShoppingCartOutlinedIcon className={styles.cartIcon} />
          <p className="text-3xl font-bold">Cart가 비어있습니다.</p>
          <p className="text-base font-semibold">Cart에 상품을 담아주세요</p>
          <Link to="/" className="text-gray-400 underline">
            계속 쇼핑하기
          </Link>
        </div>
      )}
    </section>
  );
};
export default CartPage;
