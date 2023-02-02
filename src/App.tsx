import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/shared';
import { LandingPage, NotAllowedPage, NotFoundPage } from './pages';
import { ProductsPage } from './pages/products';
import { CardPage } from './pages/card';
import {
  RegisterPage,
  LoginPage,
  ProfilePage
} from './pages/auth';
import { OrderPage } from './pages/orders';
import ProductDetail from './pages/products/ProductDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/notallowed" element={<NotAllowedPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
