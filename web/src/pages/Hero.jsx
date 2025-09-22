import { useEffect, useState } from "react";
import "./Hero.css";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";
import heroImg from "../assets/98fb219fa11f805aade2224f1d6658764a2395df.jpg";

export default function Home() {
  // UI state
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // query state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  // data
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);

  const load = async () => {
    setLoading(true);
    setErr("");
    try {
      const data = await fetchProducts({
        search: search || undefined,
        category: category || undefined,
        page, limit,
      });
      setItems(data.items || []);
      setTotal(data.total || 0);
      setPages(data.pages || 1);
    } catch (e) {
      setErr(e?.message || "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [page, limit]);

  const onSubmitFilters = (e) => {
    e.preventDefault();
    setPage(1);
    load();
  };

  return (
    <main className="home">
      {/* Hero */}
      <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero__inner">
        <p className="hero__tag">New Arrival</p>
        <h1 className="hero__title">Discover Our<br />New Collection</h1>
        <p className="hero__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="hero__btn">BUY NOW</button>
      </div>
    </section>

      {/* Filters */}
     

      {/* Products */}
      
    </main>
  );
}
