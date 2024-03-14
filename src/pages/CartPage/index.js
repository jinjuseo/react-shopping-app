import React, { useEffect } from "react";
import styles from "./cartPage.module.scss";
import { useRecoilState } from "recoil";
import { myItems } from "../../recoil";
import { Cart } from "../../components";

const CartPage = () => {
  const [userItems, setUserItems] = useRecoilState(myItems);
  const totalPrice = () => {
    let total = 0;
    userItems.map((item) => {
      total += item.price * item.count;
    });
    return total;
  };
  const onClickPlusBtn = (id) => {
    // setUserItems((prev) => {
    //   if (prev.id!== id) {
    //     return prev;
    //   }
    // });
  };
  useEffect(() => {
    console.log(userItems);
  }, [userItems]);
  return (
    <section className={`${styles.cart} w-full`}>
      <h1 className="text-3xl font-bold">Cart</h1>
      {userItems.length > 0 ? (
        <div className="w-full flex flex-col">
          {userItems.map((item) => (
            <Cart product={item} key={item.id} setUserItems={setUserItems} />
          ))}
          <div className="w-full flex justify-end mt-20 gap-x-4">
            <div className="text-center w-48 p-4 bg-yellow-500 text-lg font-bold">{`합계 : $ ${totalPrice()}`}</div>
            <button className="flex justify-center w-32 p-4 text-gray-400 font-bold border border-gray-400 border-2">
              계산하기
            </button>
          </div>
        </div>
      ) : (
        <div>텅텅</div>
      )}
    </section>
  );
};
export default CartPage;
