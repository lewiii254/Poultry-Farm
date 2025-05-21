import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CategoryProducts from './pages/CategoryProducts';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/category/:categoryId" element={<CategoryProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#363636',
                color: '#fff',
              },
              duration: 3000,
            }}
          />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;