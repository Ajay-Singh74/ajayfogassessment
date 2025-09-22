// src/components/ProductsSection.jsx
import { useMemo, useState } from "react";   // ✅ ek hi jagah se hooks
import { useNavigate } from "react-router-dom"; // ✅ navigation hook
import "./Products.css";   // ✅ ek hi baar CSS


/* ------------------- 1) APNI IMAGES IMPORT KARO ------------------- */
// 👉 Replace these imports with your actual image files under src/assets/products/
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

/* ------------------- 2) LOCAL PRODUCTS DATA ------------------- */
// schema: { id, name, subtitle, price, oldPrice?, discountPercent?, isNew?, image }
const PRODUCTS = [
  { id: 1,  name: "Syltherine", subtitle: "Stylish cafe chair",      price: 2500000, oldPrice: 3500000, discountPercent: 30, image: p1 },
  { id: 2,  name: "Leviosa",    subtitle: "Stylish cafe chair",      price: 2500000, isNew: true, image: p2 },
  { id: 3,  name: "Lolito",     subtitle: "Luxury big sofa",         price: 7000000, oldPrice: 14000000, discountPercent: 50, image: p3 },
  { id: 4,  name: "Respira",    subtitle: "Outdoor bar table",       price: 500000,  isNew: true, image: p4 },
  { id: 5,  name: "Grifo",      subtitle: "Night lamp",              price: 1500000, image: p5 },
  { id: 6,  name: "Muggo",      subtitle: "Small mug",               price: 150000,  image: p6, isNew: true },
  { id: 7,  name: "Pingky",     subtitle: "Cute bed set",            price: 7000000, oldPrice: 14000000, discountPercent: 50, image: p7 },
  { id: 8,  name: "Potty",      subtitle: "Minimalist flower pot",   price: 500000,  image: p8 },
  { id: 9,  name: "Dining Pro", subtitle: "Premium dining chair",    price: 3200000, image: p9 },
  { id: 10, name: "Cozy Desk",  subtitle: "Work from home desk",     price: 5200000, oldPrice: 5900000, image: p10 },
  { id: 11, name: "Soft Rug",   subtitle: "Handmade wool rug",       price: 900000,  isNew: true, image: p11 },
  { id: 12, name: "Luna Lamp",  subtitle: "Ambient table lamp",      price: 1200000, image: p12 },
];

/* ------------------- 3) TILE COMPONENT (same file) ------------------- */
function ProductTile({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // for now navigate to a fixed product detail page
    navigate("/product/asgaard-sofa");

    // ✅ later, if you add dynamic IDs:
    // navigate(`/product/${item.id}`);
  };

  return (
    <article className="tile">
      {/* Media */}
      <div className="tile__media" onClick={handleClick} style={{ cursor: "pointer" }}>
        <img src={item.image} alt={item.name} />
        {/* Badges */}
        {item.discountPercent ? (
          <span className="badge badge--sale">-{item.discountPercent}%</span>
        ) : null}
        {item.isNew ? <span className="badge badge--new">New</span> : null}

        {/* Hover overlay */}
        <div className="tile__overlay">
          <button className="tile__cta">Add to cart</button>
          <div className="tile__actions">
            <button className="linkish">Share</button>
            <button className="linkish">Compare</button>
            <button className="linkish">Like</button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="tile__body">
        <h3 className="tile__title">{item.name}</h3>
        <p className="tile__sub">{item.subtitle}</p>

        <div className="tile__prices">
          <span className="tile__price">
            ₹{Number(item.price).toLocaleString("en-IN")}
          </span>
          {item.oldPrice ? (
            <span className="tile__old">
              ₹{Number(item.oldPrice).toLocaleString("en-IN")}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/* ------------------- 4) SECTION COMPONENT ------------------- */
const PAGE_SIZE = 8; // 2 rows of 4 cards

export default function ProductsSection() {
  const [page, setPage] = useState(1);
 const navigate = useNavigate();  
  const total = PRODUCTS.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const canShowMore = page < pages;

  const visibleItems = useMemo(() => {
    const count = Math.min(page * PAGE_SIZE, total);
    return PRODUCTS.slice(0, count);
  }, [page]);

   const handleNavigate = () => {
    navigate("/shop"); // go to Shop page
  };

  return (
    <section className="prod">
      <div className="prod__container">
        <h2 className="prod__title">Our Products</h2>

        <div className="prod__grid">
          {visibleItems.map((p) => (
            <ProductTile key={p.id} item={p} />
          ))}
        </div>

        <div className="prod__more">
          {canShowMore ? (
             <button className="btn-outline" onClick={handleNavigate}>
            Show More
          </button>
          ) : (
            <span className="prod__end">You’re all caught up.</span>
          )}
        </div>
      </div>
    </section>
  );
}
