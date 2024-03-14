import React, { useState, useEffect } from "react";
import styles from "./loginPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { meState } from "../../recoil";
import { login } from "../../auth";
import { authService } from "../../auth/firebaseConfig";
const LoginPage = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(meState);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await login(form);
    if (response) {
      // console.log(response.user);
      // setUser(response.user);
      setForm({ email: "", password: "" });
      navigate("/");
    }
  };
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // 로그인 된 상태일 경우
        const userCopy = JSON.parse(JSON.stringify(user));
        setUser(userCopy);
      } else {
        // 로그아웃 된 상태일 경우
        setUser(null);
      }
    });
  }, []);
  return (
    <div className={`${styles.login} w-full`}>
      <form
        onSubmit={onSubmit}
        className={`${styles.form}  m-auto my-32 shadow-2xl p-8`}
      >
        <h1 className="text-3xl font-bold">로그인</h1>
        <div className={`${styles.inputContainer} flex flex-col gap-4`}>
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            className={`${styles.input} w-full border border-gray-400`}
            type="email"
            placeholder="email"
          ></input>
          <input
            name="password"
            value={form.password}
            onChange={onChange}
            className={`${styles.input} w-full border border-gray-400`}
            type="password"
            placeholder="password"
          ></input>
        </div>
        <button className={`${styles.submitBtn}`} type="submit">
          로그인
        </button>
        <div className="text-lg font-semibold">
          {` 계정이 없습니까? `}
          <span
            className="text-gray-400 font-base cursor-pointer text-blue-500"
            onClick={() => navigate("/register")}
          >
            가입하기
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
