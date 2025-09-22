import "./Products.css";

export default function ProductTile({ item }) {
  // expected optional fields:
  // item.image, item.subtitle, item.oldPrice, item.discountPercent, item.isNew
  const img =
    item.image ||
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop";

  return (
    <article className="tile">
      {/* Media */}
      <div className="tile__media">
        <img src={img} alt={item.name} />
        {/* Badges */}
        {item.discountPercent ? (
          <span className="badge badge--sale">-{item.discountPercent}%</span>
        ) : null}
        {item.isNew ? <span className="badge badge--new">New</span> : null}

        {/* Hover Overlay */}
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
        <p className="tile__sub">{item.subtitle || `${item.category} • ${item.brand}`}</p>

        <div className="tile__prices">
          <span className="tile__price">
            Rp {Number(item.price || 0).toLocaleString("id-ID")}
          </span>
          {item.oldPrice ? (
            <span className="tile__old">Rp {Number(item.oldPrice).toLocaleString("id-ID")}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
