import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/shared";
import { LandingPage, NotAllowedPage, NotFoundPage } from "./pages";
import { ProductsPage } from "./pages/products";
import { CardPage } from "./pages/card";
import { RegisterPage, LoginPage, ProfilePage, ForgotPasswordPage, ResetPasswordPage } from "./pages/auth";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foods" element={<ProductsPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgot/password" element={<ForgotPasswordPage />} />
        <Route path="/reset/password" element={<ResetPasswordPage />} />
        <Route path="/notallowed" element={<NotAllowedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
