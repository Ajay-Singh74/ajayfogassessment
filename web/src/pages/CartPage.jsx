// src/pages/CartPage.jsx
import { Link, useNavigate } from "react-router-dom";
import "./CartPage.css";

// Assets (prefer relative imports)
import HERO from "../assets/blog/image1.jpg";
import PRODUCT_IMG from "../assets/Asgaard sofa 3.svg";

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <main className="cart">
      {/* ===== HERO ===== */}
      <header className="cart-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="cart-hero__overlay" />
        <div className="cart-hero__inner">
          <div className="cart-logo">Cart</div>
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>›</span> <span>Cart</span>
          </nav>
        </div>
      </header>

      {/* ===== CART SECTION ===== */}
      <section className="cart-section container">
        {/* CART TABLE */}
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-cell">
                <div
  className="product-box"
  onClick={() => navigate("/product/asgaard-sofa")}
  style={{ cursor: "pointer" }} // 👈 hand cursor for UX
>
  <img src={PRODUCT_IMG} alt="Asgaard sofa" />
</div>

                <span className="product-name">Asgaard sofa</span>
              </td>
              <td className="muted">Rs. 250,000.00</td>
              <td>
                <input type="number" min={1} value={1} readOnly />
              </td>
              <td>Rs. 250,000.00</td>
              <td>
                <button className="delete" aria-label="Remove">🗑</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* CART TOTALS */}
        <aside className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="row">
            <span>Subtotal</span>
            <span className="muted">Rs. 250,000.00</span>
          </div>
          <div className="row total">
            <span>Total</span>
            <span className="gold">Rs. 250,000.00</span>
          </div>

          {/* ✅ Correct navigation */}
          <button
            className="btn-checkout"
            onClick={() => navigate("/CheckoutPage")}
          >
            Check Out
          </button>
        </aside>
      </section>
    </main>
  );
}
