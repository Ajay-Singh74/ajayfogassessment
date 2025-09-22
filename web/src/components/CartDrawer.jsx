import React from "react";
import "./CartDrawer.css";

export default function CartDrawer({
  open,
  onClose,
  items = [],
  onRemove,
}) {
  const subtotal = items.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cd-backdrop ${open ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      {/* Panel */}
      <aside
        className={`cd-panel ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label="Shopping Cart"
        aria-modal="true"
      >
        <header className="cd-head">
          <h3>Shopping Cart</h3>
          <button className="cd-close" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </header>

        <div className="cd-body">
          {items.length === 0 ? (
            <div className="cd-empty">Your cart is empty.</div>
          ) : (
            <ul className="cd-list">
              {items.map((it) => (
                <li className="cd-item" key={it.id}>
                  <img className="cd-thumb" src={it.img} alt={it.title} />
                  <div className="cd-meta">
                    <div className="cd-title">{it.title}</div>
                    <div className="cd-line">
                      <span className="cd-qty">{it.qty || 1}</span>
                      <span className="cd-mul">x</span>
                      <span className="cd-price">
                        Rs. {Number(it.price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                  <button
                    className="cd-remove"
                    aria-label={`Remove ${it.title}`}
                    onClick={() => onRemove && onRemove(it.id)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="cd-foot">
          <div className="cd-subrow">
            <span className="cd-subtxt">Subtotal</span>
            <span className="cd-subval">
              Rs. {subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="cd-actions">
            <button className="cd-btn cd-btn--ghost" type="button">Cart</button>
            <button className="cd-btn" type="button">Checkout</button>
            <button className="cd-btn cd-btn--ghost" type="button">Comparison</button>
          </div>
        </footer>
      </aside>
    </>
  );
}
