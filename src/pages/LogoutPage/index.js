import React, { useState, useEffect } from "react";
import { meState, myItems } from "../../recoil";
import { useSetRecoilState } from "recoil";
import { logout } from "../../auth";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import styles from "./logoutPage.module.scss";
import { useNavigate } from "react-router-dom";
const LogoutPage = () => {
  const setUser = useSetRecoilState(meState);
  const setUserItems = useSetRecoilState(myItems);
  const navigate = useNavigate();
  const userLogout = () => {
    const response = logout();
    if (response) {
      setUser(null);
      setUserItems([]);
    }
  };
  useEffect(() => {
    userLogout();
  }, []);
  return (
    <div className={`${styles.logout} w-full`}>
      <div className={`${styles.signout}  m-auto my-32 shadow-2xl p-8`}>
        <CheckCircleOutlineOutlinedIcon />
        <p className="text-2xl font-bold">로그아웃 되었습니다.</p>
        <button onClick={() => navigate("/login")}>로그인</button>
      </div>
    </div>
  );
};
export default LogoutPage;
