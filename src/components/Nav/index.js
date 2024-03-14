import React from "react";
import styles from "./nav.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useNavigate } from "react-router-dom";
import { meState, myItems } from "../../recoil";
import { useRecoilValue } from "recoil";

const Nav = () => {
  const user = useRecoilValue(meState);
  const userItems = useRecoilValue(myItems);
  // const navigate = useNavigate();

  return (
    <nav
      className={`"w-full h-12 p-4 px-8 border-b-4 border-solid shadow-xl ${styles.nav}`}
    >
      <Link to="/" className="w-5/6 px-4 text-xl font-semibold">
        Shop
      </Link>

      <div className={`w-1/6  ${styles.buttons}`}>
        <Link to="/cart">
          <ShoppingCartOutlinedIcon />
        </Link>
        <Link to="/myPage">
          <PersonOutlineOutlinedIcon />
        </Link>
        {user ? (
          <Link to="/logout">
            <LogoutOutlinedIcon />
          </Link>
        ) : (
          <Link to="/login">
            <LoginOutlinedIcon />
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Nav;
