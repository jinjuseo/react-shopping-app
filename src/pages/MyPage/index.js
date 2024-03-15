import { React } from "react";
import styles from "./myPage.module.scss";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
const MyPage = () => {
  return (
    <section className={`w-full ${styles.myPage}`}>
      <h1 className="text-3xl font-bold">MyPage</h1>
      <DirectionsRunIcon />
    </section>
  );
};

export default MyPage;
