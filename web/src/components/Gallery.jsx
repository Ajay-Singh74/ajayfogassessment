import "./Gallery.css";
import galleryImg from "../assets/Images.svg"; // single composite image

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>
        Share your setup with <span>#FuniroFurniture</span>
      </h2>

      <div className="gallery__wrap">
        <img className="gallery__img" src={galleryImg} alt="Funiro gallery" />
      </div>
    </section>
  );
}
