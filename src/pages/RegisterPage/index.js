import React, { useState, useRef, useEffect } from "react";
import styles from "./registerPage.module.scss";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { register } from "../../auth";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    checkedPassword: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    checkedPassword: false,
  });
  const [signup, setSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const checkedPassword = useRef(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validatePassword = () => {
    if (form.password.length < 6) {
      password.current.focus();
      return false;
    }
    return true;
  };
  const validateCheckedPassword = () => {
    if (form.password !== form.checkedPassword) {
      checkedPassword.current.focus();
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!form.email.indexOf("@")) {
      email.current.focus();
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    const validCheckedPassword = validateCheckedPassword();
    setErrors({
      email: !validEmail,
      password: !validPassword,
      checkedPassword: !validCheckedPassword,
    });
    const validate = validEmail && validPassword && validCheckedPassword;
    if (!validate) return;
    const response = await register(form);
    if (response) {
      console.log(response);
      setSignUp(true);
      setErrors({ email: false, password: false, checkedPassword: false });
    }
  };
  return (
    <div className={`${styles.register} w-full`}>
      {signup ? (
        <div className={`${styles.signup}  m-auto my-32 shadow-2xl p-8`}>
          <CheckCircleOutlineOutlinedIcon />
          <p className="text-2xl font-bold">회원가입이 완료되었습니다.</p>
          <button onClick={() => navigate("/login")}>로그인</button>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className={`${styles.form}  m-auto my-32 shadow-2xl p-8`}
        >
          <h1 className="text-3xl font-bold">회원 가입</h1>
          <div className={`${styles.inputContainer} flex flex-col gap-4`}>
            <div className={`${styles.inputBox}`}>
              <label htmlFor="email">이메일 :</label>
              <div>
                <input
                  ref={email}
                  onChange={onChange}
                  id="email"
                  name="email"
                  value={form.email}
                  className={`${styles.input} w-full border border-gray-400 ${
                    errors.email ? styles.errorInput : ""
                  }`}
                  type="email"
                  placeholder="이메일 입력"
                />
                {errors.email && (
                  <span className={styles.errorMsg}>
                    이메일 형식이 올바르지 않습니다.
                  </span>
                )}
              </div>
            </div>

            <div className={`${styles.inputBox}`}>
              <label htmlFor="password">비밀번호 :</label>
              <div>
                <input
                  ref={password}
                  id="password"
                  onChange={onChange}
                  value={form.password}
                  name="password"
                  className={`${styles.input} w-full border border-gray-400 ${
                    errors.password ? styles.errorInput : ""
                  }`}
                  type="password"
                  placeholder="비밀번호 입력"
                />

                {errors?.password ? (
                  <span className={styles.errorMsg}>
                    비밀번호는 6자 이상으로 입력하십시오.
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className={`${styles.inputBox}`}>
              <label htmlFor="checkedPassword">재입력 :</label>
              <div>
                <input
                  ref={checkedPassword}
                  value={form.checkedPassword}
                  onChange={onChange}
                  id="checkedPassword"
                  name="checkedPassword"
                  className={`${styles.input} w-full border border-gray-400 ${
                    errors.checkedPassword ? styles.errorInput : ""
                  }`}
                  type="password"
                  placeholder="비밀번호 재입력"
                />
                {errors.checkedPassword && (
                  <span className={styles.errorMsg}>
                    비밀번호가 일치하지 않습니다.
                  </span>
                )}
              </div>
            </div>
          </div>
          <button className={`${styles.submitBtn}`} type="submit">
            가입 하기
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterPage;
