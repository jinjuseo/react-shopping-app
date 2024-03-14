import { Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import "./App.css";
import { authService } from "./auth/firebaseConfig";
import {
  HomePage,
  MainPage,
  LoginPage,
  DetailPage,
  RegisterPage,
  LogoutPage,
  CartPage,
} from "./pages/";
function App() {
  // console.log(authService);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* Products  */}
          <Route index element={<MainPage />} />
          <Route path="product/:id" element={<DetailPage />} />
          {/* Cart */}
          <Route path="cart" element={<CartPage />} />
          {/* Auth */}
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="logout" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
