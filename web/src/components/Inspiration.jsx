import { useState } from "react";
import "./Inspiration.css";

// 🔽 your given imports (keep file names exactly)
import insp1 from "../assets/Image.svg";
import insp2 from "../assets/Rectangle 25.svg";
import insp3 from "../assets/Rectangle 26.svg";

const SLIDES = [
  { id: 1, img: insp1, tag: "01 — Bed Room", title: "Inner Peace" },
  { id: 2, img: insp2, tag: "02 — Dining Room", title: "Cozy Light" },
  { id: 3, img: insp3, tag: "03 — Living Room", title: "Soft Tones" },
];

export default function Inspiration() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIdx((i) => (i + 1) % SLIDES.length);

  return (
    <section className="insp">
      {/* Left text panel */}
      <div className="insp__panel">
        <h2 className="insp__heading">50+ Beautiful rooms inspiration</h2>
        <p className="insp__desc">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you
        </p>
        <button className="insp__cta">Explore More</button>
      </div>

      {/* Right slider area */}
      <div className="insp__slider">
        {/* Main slide with overlay */}
        <div className="insp__main">
          <img src={SLIDES[idx].img} alt={SLIDES[idx].title} />
          <div className="insp__overlay">
            <span className="insp__tag">{SLIDES[idx].tag}</span>
            <h3 className="insp__title">{SLIDES[idx].title}</h3>
            <button className="insp__arrow insp__arrow--cta" aria-label="Open">
              →
            </button>
          </div>
        </div>

        {/* Side preview (the next image) */}
        <div className="insp__side">
          <img
            src={SLIDES[(idx + 1) % SLIDES.length].img}
            alt={SLIDES[(idx + 1) % SLIDES.length].title}
          />

          {/* Right arrows stack (over image edge) */}
          <div className="insp__navButtons">
            <button className="insp__nav insp__nav--prev" onClick={prev} aria-label="Previous">
              ‹
            </button>
            <button className="insp__nav insp__nav--next" onClick={next} aria-label="Next">
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="insp__dots" role="tablist" aria-label="Slides">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`insp__dot ${i === idx ? "is-active" : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === idx}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
