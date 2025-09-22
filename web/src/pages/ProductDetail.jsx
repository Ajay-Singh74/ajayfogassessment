import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css";

/* ---- MAIN gallery images ---- */
import main1 from "../assets/Asgaard sofa 3.svg";
import main2 from "../assets/Outdoor sofa set_2 1.svg";
import main3 from "../assets/Stuart sofa 1.svg";
import main4 from "../assets/Mask group (3).svg";

/* ---- Related products ke thumbnails ---- */
import r1 from "../assets/products/Images (1).svg";
import r2 from "../assets/products/Images (1).svg";
import r3 from "../assets/products/image 3.svg";
import r4 from "../assets/products/Images (3).svg";

/* ---- Mini Cart (side drawer) ---- */
import CartDrawer from "../components/CartDrawer";

const RELATED = [
  { id: 1, img: r1, title: "Syltherine", sub: "Stylish cafe chair", price: 2500000, old: 3500000, badge: "-30%" },
  { id: 2, img: r2, title: "Leviosa",    sub: "Stylish cafe chair", price: 2500000 },
  { id: 3, img: r3, title: "Lolito",     sub: "Luxury big sofa",    price: 7000000, old: 14000000, badge: "-50%" },
  { id: 4, img: r4, title: "Respira",    sub: "Outdoor bar table and stool", price: 500000, badge: "New" },
];

export default function ProductDetail() {
  const navigate = useNavigate();

  // Gallery / options
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("gold");

  // Mini cart (drawer) state
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const images = [main1, main2, main3, main4];

  // -------- Cart helpers ----------
  const addLine = (line) =>
    setCartItems((prev) => {
      const idx = prev.findIndex((p) => p.id === line.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + line.qty };
        return copy;
      }
      return [...prev, line];
    });

  const addMainProductToCart = () => {
    addLine({
      id: "asgaard-sofa",
      title: "Asgaard sofa",
      price: 250000, // Rs. 250,000.00 as per UI
      qty,
      img: images[activeImg],
    });
    setCartOpen(true);
  };

  // Related card click => open drawer with that item (qty 1)
  const onRelatedClick = (p) => {
    addLine({
      id: `rel-${p.id}`,
      title: p.title,
      price: p.price,
      qty: 1,
      img: p.img,
    });
    setCartOpen(true);
  };

  const inc = (id) =>
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );

  const dec = (id) =>
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p
      )
    );

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((p) => p.id !== id));

  // --------------------------------

  return (
    <main className="pd">
      {/* ====== Breadcrumb / top strip ====== */}
      <section className="pd-crumbs">
        <div className="pd-crumbs__inner">
          <span className="linkish" onClick={() => navigate("/")}>Home</span>
          <span className="sep">›</span>
          <span className="linkish" onClick={() => navigate("/shop")}>Shop</span>
          <span className="sep">›</span>
          <strong>Asgaard sofa</strong>
        </div>
      </section>

      {/* ====== Product top: gallery + info ====== */}
      <section className="pd-top">
        <div className="pd-gallery">
          <div className="pd-thumbs">
            {images.map((src, i) => (
              <button
                key={i}
                className={`pd-thumb ${activeImg === i ? "is-active" : ""}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={src} alt={`thumb-${i}`} />
              </button>
            ))}
          </div>

          <div className="pd-main">
            <img src={images[activeImg]} alt="product" />
          </div>
        </div>

        <div className="pd-info">
          <h1 className="pd-title">Asgaard sofa</h1>
          <div className="pd-price">Rs. 250,000.00</div>

          <div className="pd-rating">
            <span className="stars">★★★★★</span>
            <span className="muted">5 Customer Review</span>
          </div>

          <p className="pd-desc">
            Setting the bar as one of the loudest speakers in its class, the Kibun is
            a compact, stout-hearted hero with a well-balanced audio which boasts a
            clear midrange and extended highs for a sound.
          </p>

          <div className="pd-opts">
            {/* Size */}
            <div className="opt">
              <div className="opt__label">Size</div>
              <div className="opt__chips">
                {["L", "XL", "XS"].map((v) => (
                  <button
                    key={v}
                    className={`chip ${size === v ? "is-active" : ""}`}
                    onClick={() => setSize(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="opt">
              <div className="opt__label">Color</div>
              <div className="opt__colors">
                {[
                  { key: "purple", hex: "#5D3FD3" },
                  { key: "gold", hex: "#B88E2F" },
                  { key: "black", hex: "#222" },
                ].map((c) => (
                  <button
                    key={c.key}
                    className={`dot ${color === c.key ? "is-active" : ""}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setColor(c.key)}
                    aria-label={c.key}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Qty + actions */}
          <div className="pd-actions">
            <div className="qty">
              <button onClick={() => setQty((n) => Math.max(1, n - 1))}>−</button>
              <input value={qty} readOnly />
              <button onClick={() => setQty((n) => n + 1)}>+</button>
            </div>

            <button className="btn btn--primary" onClick={() => navigate("/CartPage")}>
              Add To Cart
            </button>
            <button className="btn btn--ghost" onClick={() => navigate("/compare")}>+ Compare</button>
          </div>

          {/* Meta */}
          <div className="pd-meta">
            <div><span>SKU</span> <b>SS001</b></div>
            <div><span>Category</span> <b>Sofas</b></div>
            <div><span>Tags</span> <b>Sofa, Chair, Home, Shop</b></div>
            <div><span>Share</span> <b>🔗 🐦 💬</b></div>
          </div>
        </div>
      </section>

      {/* ====== Tabs ====== */}
      <section className="pd-tabs">
        <div className="tabs__head">
          <button className="t is-active">Description</button>
          <button className="t">Additional Information</button>
          <button className="t">Reviews [5]</button>
        </div>

        <div className="tabs__body">
          <p>
            Embodying the raw, wayward spirit of rock ’n’ roll, the Kiburn portable active
            stereo speaker takes the unmistakable look and sound of Marshall, unplugs the
            chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kiburn is a lightweight piece of vintage-styled
            engineering. The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap enables easy and
            stylish travel.
          </p>

          <div className="pd-desc-grid">
            <img src={main2} alt="desc-1" />
            <img src={main3} alt="desc-2" />
          </div>
        </div>
      </section>

      {/* ====== Related products ====== */}
      <section className="pd-related">
        <h2>Related Products</h2>

        <div className="rel-grid">
          {RELATED.map((p) => (
            <article key={p.id} className="rel-card" onClick={() => onRelatedClick(p)}>
              <div className="rel-media">
                <img src={p.img} alt={p.title} />
                {p.badge && (
                  <span className={`badge ${p.badge === "New" ? "badge--new" : "badge--sale"}`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="rel-body">
                <h3>{p.title}</h3>
                <p className="muted">{p.sub}</p>
                <div className="prices">
                  <b>Rp {Number(p.price).toLocaleString("id-ID")}</b>
                  {p.old && <span className="old">Rp {Number(p.old).toLocaleString("id-ID")}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rel-more">
          <button className="btn-outline" onClick={() => navigate("/shop")}>
            Show More
          </button>
        </div>
      </section>

      {/* ====== Mini cart drawer mount ====== */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onInc={inc}
        onDec={dec}
        onRemove={removeItem}
      />
    </main>
  );
}
