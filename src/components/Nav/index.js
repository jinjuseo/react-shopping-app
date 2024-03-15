import React, { useState } from "react";
import styles from "./nav.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, useNavigate } from "react-router-dom";
import { meState, myItems } from "../../recoil";
import { useRecoilValue } from "recoil";
import { CartPreview } from "../../components";

const Nav = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(meState);
  const userItems = useRecoilValue(myItems);
  const [showPreview, setShowPreview] = useState(false);
  const [showCount, setShowCount] = useState(false);

  const onMouseEnter = () => {
    if (userItems.length > 0) {
      // cartCount.current.style.visibility = "visible";
      setShowCount(true);
    }
  };
  const onMouseLeave = () => {
    if (userItems.length > 0) {
      // cartCount.current.style.visibility = "hidden";
      setShowCount(false);
    }
  };
  const onClick = () => {
    if (userItems.length > 0) {
      setShowPreview(!showPreview);
    } else {
      navigate("/cart");
    }
  };

  return (
    <nav
      className={`"w-full h-12 p-4 px-8 border-b-4 border-solid shadow-xl ${styles.nav}`}
    >
      <Link to="/" className="w-5/6 px-4 text-xl font-semibold">
        Shop
      </Link>

      <div className={`w-1/6  ${styles.buttons}`}>
        <div className={styles.parent}>
          <ShoppingCartOutlinedIcon
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
          />

          <span
            style={{
              visibility: showCount ? "visible" : "hidden",
            }}
            className={`${styles.cartCount} `}
          >
            {userItems.length}
          </span>
          <CartPreview
            setShowPreview={setShowPreview}
            style={{
              visibility: showPreview ? "visible" : "hidden",
            }}
            // ref={cartPreview}
            className={`${styles.cartPreview}`}
          />
        </div>
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
