import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { authService } from "./firebaseConfig";
export const login = async (form) => {
  const { email, password } = form;

  try {
    const response = await signInWithEmailAndPassword(
      authService,
      email,
      password
    );
    console.log(response);
    return true;
  } catch (error) {
    console.log(error);
    alert("이메일 주소와 비밀번호가 일치하지 않습니다.");
  }
};

export const register = async (form) => {
  // const auth = getAuth(app);
  const { email, password, checkedPassword } = form;
  try {
    const response = await createUserWithEmailAndPassword(
      authService,
      email,
      password
    );
    console.log(response);
    // return response;
  } catch (err) {
    console.log(err);
    if (err.code === "auth/email-already-in-use") {
      alert("이미 가입된 이메일입니다.");
    }
  }
};

export const logout = async () => {
  await authService.signOut();
  return true;
};
