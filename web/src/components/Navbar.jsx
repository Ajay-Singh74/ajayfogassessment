// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

/* Assets */
import logo from "../assets/icon-06dc8808.svg";
import accountIcon from "../assets/mdi_account-alert-outline (1).png";
import searchIcon from "../assets/akar-icons_search.svg";
import cartIcon from "../assets/ant-design_shopping-cart-outlined.svg";

export default function Navbar({ onCartClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img loading="lazy" src={logo} alt="logo" />
        </Link>

        {/* Nav links */}
        <nav className={`navbar-links ${open ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/BlogPage">Blog</Link>
          <Link to="/ContactPage">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="navbar-icons">
          <button aria-label="Account" onClick={onCartClick}>
            <img src={accountIcon} alt="account" width="24" height="24" />
          </button>

          <button aria-label="Search" onClick={onCartClick}>
            <img src={searchIcon} alt="search" width="24" height="24" />
          </button>

          <button aria-label="Wishlist" onClick={onCartClick}>♡</button>

          {/* Cart Button — opens Drawer */}
          <button aria-label="Cart" onClick={onCartClick}>
            <img src={cartIcon} alt="cart" width="24" height="24" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
