import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import { LandingPage, NotFoundPage } from "./pages";
import { ProductsPage } from "./pages/products";
import { CardPage } from "./pages/card";
import { RegisterPage, LoginPage, ProfilePage } from "./pages/auth";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
