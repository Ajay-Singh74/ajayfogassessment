// src/pages/Shop.jsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

/* Banner */
import shopHero from "../assets/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg";

/* Product images (replace with yours) */
import p1  from "../assets/products/Images (1).svg";
import p2  from "../assets/products/Images (1).svg";
import p3  from "../assets/products/image 3.svg";
import p4  from "../assets/products/Images (3).svg";
import p5  from "../assets/products/Images (4).svg";
import p6  from "../assets/products/Images (6).svg";
import p7  from "../assets/products/Images (5).svg";
import p8  from "../assets/products/image 6.svg";
import p9  from "../assets/products/Images (1).svg";
import p10 from "../assets/products/Images (1).svg";
import p11 from "../assets/products/Images (1).svg";
import p12 from "../assets/products/Images (1).svg";

/* Feature icons (import, don’t use string paths) */
import icTrophy from "../assets/trophy 1.svg";
import icWarranty from "../assets/guarantee.svg";
import icShipping from "../assets/shipping.svg";
import icSupport from "../assets/customer-support.svg";

/* ------------------------------------------------------------------ */
/* Demo list (extend to 32 if you like) */
const ALL = [
  { id: 1,  name: "Syltherine", subtitle: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, discountPercent: 30, image: p1 },
  { id: 2,  name: "Leviosa",    subtitle: "Stylish cafe chair", price: 2500000, isNew: true, image: p2 },
  { id: 3,  name: "Lolito",     subtitle: "Luxury big sofa",     price: 7000000, oldPrice: 14000000, discountPercent: 50, image: p3 },
  { id: 4,  name: "Respira",    subtitle: "Outdoor bar table and stool", price: 500000, isNew: true, image: p4 },
  { id: 5,  name: "Syltherine", subtitle: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, discountPercent: 30, image: p5 },
  { id: 6,  name: "Muggo",      subtitle: "Small mug",          price: 150000,  isNew: true, image: p6 },
  { id: 7,  name: "Pingky",     subtitle: "Cute bed set",       price: 7000000, oldPrice: 14000000, discountPercent: 50, image: p7 },
  { id: 8,  name: "Potty",      subtitle: "Minimalist flower pot", price: 500000, image: p8 },
  { id: 9,  name: "Dining Pro", subtitle: "Premium dining chair", price: 3200000, image: p9 },
  { id: 10, name: "Cozy Desk",  subtitle: "Work from home desk",  price: 5200000, oldPrice: 5900000, image: p10 },
  { id: 11, name: "Soft Rug",   subtitle: "Handmade wool rug",    price: 900000,  isNew: true, image: p11 },
  { id: 12, name: "Luna Lamp",  subtitle: "Ambient table lamp",   price: 1200000, image: p12 },
];

/* Small tile */
function Tile({ item, onOpen }) {
  return (
    <article className="tile" onClick={onOpen} style={{ cursor: "pointer" }}>
      <div className="tile__media">
        <img src={item.image} alt={item.name} />
        {item.discountPercent ? (
          <span className="badge badge--sale">-{item.discountPercent}%</span>
        ) : null}
        {item.isNew ? <span className="badge badge--new">New</span> : null}

        <div className="tile__overlay" onClick={(e) => e.stopPropagation()}>
          <button className="tile__cta">Add to cart</button>
          <div className="tile__actions">
            <button className="linkish">Share</button>
            <button className="linkish">Compare</button>
            <button className="linkish">Like</button>
          </div>
        </div>
      </div>

      <div className="tile__body">
        <h3 className="tile__title">{item.name}</h3>
        <p className="tile__sub">{item.subtitle}</p>
        <div className="tile__prices">
          <span className="tile__price">Rp {Number(item.price).toLocaleString("id-ID")}</span>
          {item.oldPrice ? (
            <span className="tile__old">Rp {Number(item.oldPrice).toLocaleString("id-ID")}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
export default function Shop() {
  const navigate = useNavigate();

  // toolbar state
  const [per, setPer] = useState(16);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("default"); // default | price | name

  const sorted = useMemo(() => {
    const arr = [...ALL];
    if (sort === "price") arr.sort((a, b) => a.price - b.price);
    if (sort === "name")  arr.sort((a, b) => a.name.localeCompare(b.name));
    return arr;
  }, [sort]);

  const pages = Math.ceil(sorted.length / per);
  const start = (page - 1) * per;
  const items = sorted.slice(start, start + per);

  return (
    <main className="shop">
      {/* 1) Banner */}
      <section className="shopHero" style={{ backgroundImage: `url(${shopHero})` }}>
        <div className="shopHero__inner">
          <h1>Shop</h1>
          <div className="crumbs">
            <span>Home</span> <span>›</span> <strong>Shop</strong>
          </div>
        </div>
      </section>

      {/* 2) Toolbar */}
      <section className="toolbar">
        <div className="tb__left">
          <button className="tbBtn">☰ Filter</button>
          <span className="tbIcon">▦</span>
          <span className="tbIcon">☰</span>
          <div className="tbDivider" />
          <span className="muted">
            Showing {start + 1}-{Math.min(start + per, sorted.length)} of {sorted.length} results
          </span>
        </div>

        <div className="tb__right">
          <label className="label">Show</label>
          <select
            className="input small"
            value={per}
            onChange={(e) => {
              setPer(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={16}>16</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>

          <label className="label">Short by</label>
          <select
            className="input"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
          >
            <option value="default">Default</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
      </section>

      {/* 3) Grid (each tile navigates to /product/asgaard-sofa) */}
      <section className="shopGrid">
        {items.map((p) => (
          <Tile
            key={p.id}
            item={p}
            onOpen={() => navigate("/product/asgaard-sofa")}
          />
        ))}
      </section>

      {/* 4) Pagination */}
      <section className="pagination">
        <div className="pager">
          <button
            className="num"
            disabled={page === 1}
            onClick={() => setPage((n) => Math.max(1, n - 1))}
          >
            Prev
          </button>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`num ${page === i + 1 ? "is-active" : ""}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="num"
            disabled={page === pages}
            onClick={() => setPage((n) => Math.min(pages, n + 1))}
          >
            Next
          </button>
        </div>
      </section>

      {/* 5) Feature Strip */}
      <section className="features">
        <div className="feat">
          <img loading="lazy" src={icTrophy} alt="quality" />
          <div>
            <div className="feat__title">High Quality</div>
            <div className="feat__sub">crafted from top materials</div>
          </div>
        </div>

        <div className="feat">
          <img loading="lazy" src={icWarranty} alt="warranty" />
          <div>
            <div className="feat__title">Warranty Protection</div>
            <div className="feat__sub">Over 2 years</div>
          </div>
        </div>

        <div className="feat">
          <img loading="lazy" src={icShipping} alt="shipping" />
          <div>
            <div className="feat__title">Free Shipping</div>
            <div className="feat__sub">Order over Rp 1.000.000</div>
          </div>
        </div>

        <div className="feat">
          <img loading="lazy" src={icSupport} alt="support" />
          <div>
            <div className="feat__title">24 / 7 Support</div>
            <div className="feat__sub">Dedicated support</div>
          </div>
        </div>
      </section>
    </main>
  );
}
