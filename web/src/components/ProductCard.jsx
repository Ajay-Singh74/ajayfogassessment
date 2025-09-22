import "./ProductCard.css";

export default function ProductCard({ item }) {
  const imgSrc =
    item.image ||
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop";

  return (
    <article className="card">
      <div className="card__media">
        <img
          src={imgSrc}
          alt={item.name}
          onError={(e) => { e.currentTarget.src = "https://picsum.photos/800/600"; }}
        />
      </div>
      <div className="card__body">
        <div className="card__meta">{item.brand} • {item.category}</div>
        <h3 className="card__title">{item.name}</h3>
        <div className="card__price">₹{item.price}</div>
        <button className="btn btn--ghost">Add to cart</button>
      </div>
    </article>
  );
}
