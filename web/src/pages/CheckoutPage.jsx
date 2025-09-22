import React from "react";
import "./CheckoutPage.css";

// 👇 change to your real hero image path
const HERO = "/src/assets/blog/image1.jpg";

export default function CheckoutPage() {
  return (
    <main className="checkout">
      {/* ===== HERO ===== */}
      <header className="co-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="co-hero__overlay" />
        <div className="co-hero__inner">
          <div className="co-title">Checkout</div>
          <nav className="co-breadcrumb">
            <a href="#">Home</a> <span>›</span> <span>Checkout</span>
          </nav>
        </div>
      </header>

      <div className="co-wrap">
        <div className="co-grid">
          {/* LEFT: BILLING FORM */}
          <section>
            <h2 className="section-heading">Billing details</h2>

            <form className="billing-form" onSubmit={(e) => e.preventDefault()}>
              <div className="grid-2">
                <label>
                  <span>First Name</span>
                  <input type="text" placeholder="" />
                </label>
                <label>
                  <span>Last Name</span>
                  <input type="text" placeholder="" />
                </label>
              </div>

              <label>
                <span>Company Name (Optional)</span>
                <input type="text" />
              </label>

              <label>
                <span>Country / Region</span>
                <div className="select">
                  <select defaultValue="Sri Lanka">
                    <option>Sri Lanka</option>
                    <option>India</option>
                    <option>Nepal</option>
                  </select>
                  <span className="caret">▾</span>
                </div>
              </label>

              <label>
                <span>Street address</span>
                <input type="text" />
              </label>

              <label>
                <span>Town / City</span>
                <input type="text" />
              </label>

              <label>
                <span>Province</span>
                <div className="select">
                  <select defaultValue="Western Province">
                    <option>Western Province</option>
                    <option>Central Province</option>
                    <option>Southern Province</option>
                  </select>
                  <span className="caret">▾</span>
                </div>
              </label>

              <label>
                <span>ZIP code</span>
                <input type="text" />
              </label>

              <label>
                <span>Phone</span>
                <input type="tel" />
              </label>

              <label>
                <span>Email address</span>
                <input type="email" />
              </label>

              <label>
                <span>Additional information</span>
                <input type="text" placeholder="" />
              </label>
            </form>
          </section>

          {/* RIGHT: ORDER SUMMARY */}
          <aside className="summary">
            <div className="summary-head">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div className="summary-row">
              <span>Asgaard sofa &nbsp; x 1</span>
              <span>Rs. 250,000.00</span>
            </div>

            <div className="summary-row">
              <span className="muted">Subtotal</span>
              <span className="muted">Rs. 250,000.00</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span className="total-amt">Rs. 250,000.00</span>
            </div>

            <hr className="divide" />

            <div className="pay-options">
              <label className="radio">
                <input type="radio" name="pay" defaultChecked />
                <span>Direct Bank Transfer</span>
              </label>
              <p className="hint">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our account.
              </p>

              <label className="radio muted">
                <input type="radio" name="pay" />
                <span>Direct Bank Transfer</span>
              </label>

              <label className="radio muted">
                <input type="radio" name="pay" />
                <span>Cash On Delivery</span>
              </label>
            </div>

            <p className="policy">
              Your personal data will be used to support your experience throughout
              this website, to manage access to your account, and for other
              purposes described in our <a href="#" className="link">privacy policy.</a>
            </p>

            <button className="btn-outline">Place order</button>
          </aside>
        </div>
      </div>
    </main>
  );
}