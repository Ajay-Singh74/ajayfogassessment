import React from "react";
import "./BlogPage.css";

/* 👉 Use different images */
const IMG1 = "/src/assets/blog/image1.jpg";
const IMG2 = "/src/assets/blog/d248030196ed5dc3b3d01cf6cd369ef7aff2f296.jpg";
const IMG3 = "/src/assets/blog/8dee6dec4190307dc6c7273c0bbf5086605997e4.jpg";
const TH1  = "/src/assets/blog/2e2c01ab8b94b8e3a17bbb18c564006d557e73b1.jpg";
const TH2  = "/src/assets/blog/37528005309ac985861a262b8622e7528e08049f.jpg";
const TH3  = "/src/assets/blog/0b5e85006615f4968338e0a7004a86529ecf85c9.jpg";
const TH4  = "/src/assets/blog/90564e0fcfbc72a9932875eeb20db551bb01abb3.jpg";
const TH5  = "/src/assets/blog/455ff3a57de5c930d1538360f43cbfa1d7f00337.jpg";

/* Fallbacks: if you don’t have all files yet, point any of them to IMG1 */
const safe = (p, fallback = IMG1) => p || fallback;

const POSTS = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    author: "Admin",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Etiam cursus metus vel faucibus turpis. In cursus mattis molestie a iaculis at. Nibh cras pulvinar mattis nunc sed. Pellentesque elit ullamcorper dignissim.",
    image: safe(IMG1),
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    author: "Admin",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam cursus metus vel faucibus turpis. Pellentesque elit ullamcorper dignissim cras.",
    image: safe(IMG2),
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    category: "Wood",
    author: "Admin",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    image: safe(IMG3),
  },
];

const CATEGORIES = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const RECENTS = [
  { id: 11, title: "Going all-in with millennial design", date: "14 Aug 2022", image: safe(TH1) },
  { id: 12, title: "Exploring new ways of decorating", date: "19 Aug 2022", image: safe(TH2) },
  { id: 13, title: "Handmade pieces that took time to make", date: "23 Aug 2022", image: safe(TH3) },
  { id: 14, title: "Modern home in Milan", date: "26 Aug 2022", image: safe(TH4) },
  { id: 15, title: "Colorful office redesign", date: "27 Aug 2022", image: safe(TH5) },
];

export default function BlogPage() {
  return (
    <main className="blog">
      {/* HERO / BREADCRUMB */}
      <header className="blog-hero" style={{ backgroundImage: `url(${IMG1})` }}>
        <div className="blog-hero__overlay" />
        <div className="blog-hero__inner">
          <div className="blog-logo">Blog</div>
          <nav className="breadcrumb">
            <a href="#">Home</a> <span>›</span> <span>Blog</span>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container">
        <div className="layout">
          {/* LEFT: POSTS */}
          <section className="posts">
            {POSTS.map((p) => (
              <article key={p.id} className="post">
                <a href="#" className="post__media">
                  <img src={p.image} alt={p.title} />
                </a>

                <ul className="post__meta">
                  <li className="meta-item">👤 {p.author}</li>
                  <li className="meta-item">📅 {p.date}</li>
                  <li className="meta-item">🏷️ {p.category}</li>
                </ul>

                <h2 className="post__title">
                  <a href="#">{p.title}</a>
                </h2>

                <p className="post__excerpt">{p.excerpt}</p>

                {/* now black */}
                <a href="#" className="post__read">Read more</a>
              </article>
            ))}

            {/* PAGINATION (centered & like screenshot) */}
            <nav className="pagination">
              <a href="#" className="page is-active">1</a>
              <a href="#" className="page">2</a>
              <a href="#" className="page">3</a>
              <a href="#" className="page">4</a>
              <a href="#" className="page next">Next</a>
            </nav>
          </section>

          {/* RIGHT: SIDEBAR */}
          <aside className="sidebar">
            <div className="widget">
              <form className="search" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Search" />
                <button aria-label="Search">🔍</button>
              </form>
            </div>

            <div className="widget">
              <h3 className="widget__title">Categories</h3>
              <ul className="cats">
                {CATEGORIES.map((c) => (
                  <li key={c.name}>
                    <a href="#">{c.name}</a>
                    <span>{c.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="widget">
              <h3 className="widget__title">Recent Posts</h3>
              <ul className="recent">
                {RECENTS.map((r) => (
                  <li key={r.id} className="recent__item">
                    <a className="recent__thumb" href="#">
                      <img src={r.image} alt={r.title} />
                    </a>
                    <div className="recent__info">
                      <a className="recent__title" href="#">{r.title}</a>
                      <span className="recent__date">{r.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

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