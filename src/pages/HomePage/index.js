import React from "react";
import { Nav } from "../../components";
import { Outlet } from "react-router-dom";
import styles from "./home.module.scss";
const Home = () => {
  return (
    <main className={styles.main}>
      <Nav />
      <Outlet />
    </main>
  );
};

export default Home;
