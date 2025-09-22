// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import CartDrawer from "./components/CartDrawer"; // <-- if you have this

// pages
import Hero from "./pages/Hero";
import Shop from "./pages/Shop";
import Compare from "./pages/Compare";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";


// sections for Home
import RangeSection from "./components/RangeSection";
import ProductsSection from "./components/ProductsSection";
import Inspiration from "./components/Inspiration";
import Gallery from "./components/Gallery";
import BlogPage from "./pages/BlogPage";


export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onCartClick={() => setCartOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <RangeSection />
              <ProductsSection />
              <Inspiration />
              <Gallery />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/asgaard-sofa" element={<ProductDetail />} />
         <Route path="/BlogPage" element={<BlogPage />} />
         <Route path="/compare" element={<Compare />} />
         <Route path="/ContactPage" element={<ContactPage />} />
         <Route path="/CheckoutPage" element={<CheckoutPage />} />
         <Route path="/CartPage" element={<CartPage />} />
        
      </Routes>

      <Footer />

      {/* Drawer mount karega */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
