import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__inner">
        {/* Top grid */}
        <div className="ft__grid">
          {/* Brand + address */}
          <div className="ft__brand">
            <h3 className="ft__logo">Funiro.</h3>
            <address className="ft__address">
              400 University Drive Suite 200 Coral<br />
              Gables,<br />
              FL 33134 USA
            </address>
          </div>

          {/* Links */}
          <div>
            <div className="ft__heading">Links</div>
            <ul className="ft__list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <div className="ft__heading">Help</div>
            <ul className="ft__list">
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="ft__heading">Newsletter</div>
            <form className="ft__newsletter" onSubmit={(e) => e.preventDefault()}>
              <input
                className="ft__input"
                type="email"
                placeholder="Enter Your Email Address"
                aria-label="Email"
              />
              <button className="ft__subscribe" type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="ft__hr" />

        {/* Bottom row */}
        <div className="ft__bottom">
          2023 funiro. All rights reverved
        </div>
      </div>
    </footer>
  );
}
