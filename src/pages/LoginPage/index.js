import React from "react";
import styles from "./auth.module.scss";
const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={`${styles.login} w-full`}>
      <form
        onSubmit={onSubmit}
        className={`${styles.form}  m-auto my-40 shadow-2xl p-8`}
      >
        <h1 className="text-3xl font-bold">로그인</h1>
        <div className={`${styles.inputContainer} flex flex-col gap-4`}>
          <input
            className={`${styles.input} w-full border border-gray-400`}
            type="email"
            placeholder="email"
          ></input>
          <input
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
          <span className="text-gray-400 font-base">가입하기</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
