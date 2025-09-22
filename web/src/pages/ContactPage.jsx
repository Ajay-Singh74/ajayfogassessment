import React from "react";
import "./ContactPage.css";

// ❗ change this to your actual hero image path
const HERO = "/src/assets/blog/image1.jpg";

export default function ContactPage() {
  return (
    <main className="contact">
      {/* ===== HERO / BREADCRUMB ===== */}
      <header className="contact-hero" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="contact-hero__overlay" />
        <div className="contact-hero__inner">
          <div className="contact-logo">Contact</div>
          <nav className="breadcrumb">
            <a href="#">Home</a> <span>›</span> <span>Contact</span>
          </nav>
        </div>
      </header>

      {/* ===== TITLE & SUBTEXT ===== */}
      <section className="contact-head">
        <h1>Get In Touch With Us</h1>
        <p>
          For more information about our product &amp; services, please feel free to drop us
          an email. Our staff always be there to help you out. Do not hesitate!
        </p>
      </section>

      {/* ===== 2-COLUMN LAYOUT ===== */}
      <div className="container">
        <div className="contact-layout">
          {/* LEFT: INFO */}
          <aside className="contact-info">
            <div className="info-block">
              <span className="info-ico" aria-hidden>
                {/* pin icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-5.7 7-11a7 7 0 10-14 0c0 5.3 7 11 7 11z" stroke="#111" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="2.5" stroke="#111" strokeWidth="1.5"/>
                </svg>
              </span>
              <div>
                <h3>Address</h3>
                <p>
                  236 5th SE Avenue, New<br />
                  York NY10000, United<br />
                  States
                </p>
              </div>
            </div>

            <div className="info-block">
              <span className="info-ico" aria-hidden>
                {/* phone icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16.5v2a2 2 0 01-2.2 2 19 19 0 01-8.3-3.2 18.6 18.6 0 01-5.7-5.7A19 19 0 011.5 3.2 2 2 0 013.5 1h2a2 2 0 012 1.7l.5 3a2 2 0 01-.6 1.8L6 8.6a16 16 0 006.8 6.8l1.1-1.4a2 2 0 011.8-.6l3 .5a2 2 0 011.3 2.1z" stroke="#111" strokeWidth="1.5"/>
                </svg>
              </span>
              <div>
                <h3>Phone</h3>
                <p>
                  Mobile: (+84) 546-6789<br />
                  Hotline: (+84) 456-6789
                </p>
              </div>
            </div>

            <div className="info-block">
              <span className="info-ico" aria-hidden>
                {/* clock icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#111" strokeWidth="1.5"/>
                  <path d="M12 7v5l3 2" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <h3>Working Time</h3>
                <p>
                  Monday–Friday: 9:00 – 22:00<br />
                  Saturday–Sunday: 9:00 – 21:00
                </p>
              </div>
            </div>
          </aside>

          {/* RIGHT: FORM */}
          <section className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                <span>Your name</span>
                <input type="text" placeholder="Abc" />
              </label>

              <label>
                <span>Email address</span>
                <input type="email" placeholder="Abc@def.com" />
              </label>

              <label>
                <span>Subject</span>
                <input type="text" placeholder="This is an optional" />
              </label>

              <label>
                <span>Message</span>
                <textarea rows="5" placeholder="Hi! I’d like to ask about"></textarea>
              </label>

<button type="submit" className="btn-submit">Submit</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}