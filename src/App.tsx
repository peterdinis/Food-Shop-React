import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import { LandingPage, NotFoundPage } from "./pages";
import { ProductInfo, ProductsPage } from "./pages/products";
import { CardPage } from "./pages/card";
import { RegisterPage, LoginPage, ProfilePage, ForgotPasswordPage, ResetPasswordPage } from "./pages/auth";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgot/password" element={<ForgotPasswordPage />} />
        <Route path="/reset/password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
