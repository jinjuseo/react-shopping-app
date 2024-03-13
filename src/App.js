import { Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import "./App.css";
import { HomePage, MainPage, LoginPage, DetailPage } from "./pages/";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* Products  */}
          <Route index element={<MainPage />} />
          <Route path="product/:id" element={<DetailPage />} />
          {/* Cart */}
          <Route path="cart" />
          {/* Auth */}
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
