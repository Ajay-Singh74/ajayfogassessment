import { useMemo, useState } from "react";
import "./Compare.css";

/* ---- Product thumbnails (apni images se replace kar sakte ho) ---- */
import asgaard from "../assets/Asgaard sofa 3.svg";
import outdoor from "../assets/Outdoor sofa set_2 1.svg";
import stuart from "../assets/Stuart sofa 1.svg";

/* ---- Catalog for the “Add a Product” dropdown ---- */
const CATALOG = [
  {
    id: "asgaard",
    title: "Asgaard sofa",
    price: 250000,
    rating: 4.5,
    reviews: 5,
    img: asgaard,
    specs: {
      general: {
        "Sales Package": "1 Three Seater, 2 Single Seater",
        "Model Number": "SDSJKGH2333",
        "Secondary Material": "Solid Wood",
        Configuration: "L-shaped",
        "Upholstery Material": "Fabric + Custom",
        "Upholstery Color": "Bright Gray & Lion",
      },
      product: {
        "Filling Material": "Foam",
        "Finish Type": "Matte",
        "Adjustable Headrest": "No",
        "Maximum Load Capacity": "280 KG",
        "Origin of Manufacture": "India",
      },
      dimensions: {
        Width: "286.35 cm",
        Height: "76.5 cm",
        Depth: "167.76 cm",
        "Seat Height": "41.05 cm",
        "Leg Height": "5.91 cm",
      },
      warranty: {
        "Warranty Summary": "1 year Manufacturing Warranty",
        "Warranty Service Type":
          "For Warranty Claims or Any Product Related Issues",
        "Covered in Warranty": "Warranty of the product is limited to manufacturing defects",
        "Not Covered in Warranty":
          "Warranty Does Not Cover Any External Accessories, Damage Caused to the Product Due to Improper Installation by Customer",
        "Domestic Warranty": "1 Year",
      },
    },
  },
  {
    id: "outdoor",
    title: "Outdoor Sofa Set",
    price: 270000,
    rating: 4.2,
    reviews: 12,
    img: outdoor,
    specs: {
      general: {
        "Sales Package": "1 Technical Sofa",
        "Model Number": "PTC/DF/UR/3499A",
        "Secondary Material": "Solid Wood",
        Configuration: "U-shaped",
        "Upholstery Material": "Fabric + Custom",
        "Upholstery Color": "Bright Gray & Lion",
      },
      product: {
        "Filling Material": "Foam",
        "Finish Type": "Bright Gray & Lion",
        "Adjustable Headrest": "Yes",
        "Maximum Load Capacity": "300 KG",
        "Origin of Manufacture": "India",
      },
      dimensions: {
        Width: "286.35 cm",
        Height: "76.5 cm",
        Depth: "167.76 cm",
        "Seat Height": "41.05 cm",
        "Leg Height": "5.91 cm",
      },
      warranty: {
        "Warranty Summary": "1 year Manufacturing Warranty",
        "Warranty Service Type":
          "For Warranty Claims or Any Product Related Issues",
        "Covered in Warranty": "Warranty of the product is limited to manufacturing defects",
        "Not Covered in Warranty":
          "Warranty Does Not Cover Any External Accessories, Damage Caused to the Product Due to Improper Installation by Customer",
        "Domestic Warranty": "3 Months",
      },
    },
  },
  {
    id: "stuart",
    title: "Stuart Sofa",
    price: 230000,
    rating: 4.1,
    reviews: 9,
    img: stuart,
    specs: {
      general: {
        "Sales Package": "1 Technical Sofa",
        "Model Number": "ST/CLR/9933",
        "Secondary Material": "Hard Wood",
        Configuration: "L-shaped",
        "Upholstery Material": "Fabric + Custom",
        "Upholstery Color": "Beige & Walnut",
      },
      product: {
        "Filling Material": "Foam + Fiber",
        "Finish Type": "Matte",
        "Adjustable Headrest": "No",
        "Maximum Load Capacity": "250 KG",
        "Origin of Manufacture": "India",
      },
      dimensions: {
        Width: "260.00 cm",
        Height: "74.0 cm",
        Depth: "160.0 cm",
        "Seat Height": "42.0 cm",
        "Leg Height": "6.0 cm",
      },
      warranty: {
        "Warranty Summary": "6 Months Manufacturing Warranty",
        "Warranty Service Type": "Carry-in Service",
        "Covered in Warranty": "Manufacturing Defects Only",
        "Not Covered in Warranty": "Wear & Tear / Water / Mishandling",
        "Domestic Warranty": "6 Months",
      },
    },
  },
];

const SECTIONS = [
  { key: "general", title: "General" },
  { key: "product", title: "Product" },
  { key: "dimensions", title: "Dimensions" },
  { key: "warranty", title: "Warranty" },
];

export default function Compare() {
  // default: do products pre-selected like screenshot
  const [compareIds, setCompareIds] = useState(["asgaard", "outdoor"]);
  const products = useMemo(
    () => compareIds.map((id) => CATALOG.find((c) => c.id === id)).filter(Boolean),
    [compareIds]
  );

  const addProduct = (id) => {
    if (!id) return;
    setCompareIds((prev) =>
      prev.includes(id) ? prev : prev.length >= 3 ? prev : [...prev, id]
    );
  };

  const removeAt = (idx) => {
    setCompareIds((prev) => prev.filter((_, i) => i !== idx));
  };

  const currency = (n) =>
    `Rs. ${Number(n).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

  // table columns = 1 label + N product columns
  const cols = 1 + products.length;

  return (
    <main className="cmp">
      {/* ===== Banner / breadcrumb ===== */}
      <section className="cmp-hero">
        <div className="cmp-hero__inner">
        </div>
      </section>

      {/* ===== Top strip: left note + product chips + add product ===== */}
      <section className="cmp-top">
        <div className="cmp-note">
          <b>Go to Product page for more Products</b>
          <a className="linkish" href="#list">View More</a>
        </div>

        <div className="cmp-cards">
            <h3>
  Go to Product<br />
  page for more<br /> Products
</h3>

          {products.map((p, i) => (
            <div className="cmp-card" key={p.id}>
              <button className="cmp-close" onClick={() => removeAt(i)} aria-label="remove">×</button>
              <img src={p.img} alt={p.title} />
              <div className="meta">
                <h4>{p.title}</h4>
                <div className="price">{currency(p.price)}</div>
                <div className="rating">
                  {"★".repeat(Math.round(p.rating))}{" "}
                  <span className="muted">({p.reviews} reviews)</span>
                </div>
              </div>
            </div>
            
          ))}

          <div class="cmp-add"><label>Add a Product</label><select aria-label="Add a Product"><option value="" disabled="" selected="">Select…</option><option value="asgaard" disabled="">Asgaard sofa</option><option value="outdoor" disabled="">Outdoor Sofa Set</option><option value="stuart">Stuart Sofa</option></select></div>
        </div>

      </section>

      {/* ===== SPEC TABLE ===== */}
      <section className="cmp-table" id="list">
        <div className="cmp-scroll">
          <table className="spec">
            <colgroup>
              <col className="col-label" />
              {products.map((_, i) => (
                <col key={i} />
              ))}
            </colgroup>

            <tbody>
              {SECTIONS.map((sec) => {
                // collect all keys in this section
                const rows = Object.keys(products[0]?.specs?.[sec.key] || {}).concat(
                  // ensure all products’ keys are present
                  ...products.slice(1).flatMap((p) => Object.keys(p.specs[sec.key] || {}))
                );
                const uniqueRows = [...new Set(rows)];

                return (
                  <Fragment key={sec.key}>
                    <tr className="section">
                      <th colSpan={cols}>{sec.title}</th>
                    </tr>

                    {uniqueRows.map((label) => (
                      <tr className="row" key={label}>
                        <th className="label">{label}</th>
                        {products.map((p) => (
                          <td key={p.id + label}>
                            {p.specs?.[sec.key]?.[label] ?? "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                );
              })}

              {/* action row */}
              <tr className="actions">
                <th></th>
                {products.map((p) => (
                  <td key={p.id}>
                    <button className="btn btn--primary">Add to Cart</button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="features">
        <div className="feat">
         <img
            loading="lazy"
            src="src/assets/trophy 1.svg"
            alt="logo"
          />
          <div>
            <div className="feat__title">High Quality</div>
            <div className="feat__sub">crafted from top materials</div>
          </div>
        </div>
        <div className="feat">
          
          <img
            loading="lazy"
            src="src/assets/guarantee.svg"
            alt="logo"
          />
          <div>
            <div className="feat__title">Warranty Protection</div>
            <div className="feat__sub">Over 2 years</div>
          </div>
        </div>
        <div className="feat">
          <img
            loading="lazy"
            src="src/assets/shipping.svg"
            alt="logo"
          />
          <div>
            <div className="feat__title">Free Shipping</div>
            <div className="feat__sub">Order over Rp 1.000.000</div>
          </div>
        </div>
        <div className="feat">
          <img
            loading="lazy"
            src="src/assets/customer-support.svg"
            alt="logo"
          />
          <div>
            <div className="feat__title">24 / 7 Support</div>
            <div className="feat__sub">Dedicated support</div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* React 18’s automatic runtime ke liye Fragment import */
import { Fragment } from "react";
