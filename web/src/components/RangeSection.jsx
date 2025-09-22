import "./RangeSection.css";

// Aap chahein to in images ko apne assets se replace kar sakte ho:
import imgDining  from "../assets/Mask Group.svg";
import  imgLiving  from "../assets/Image-living room.svg";
import imgBed  from "../assets/Mask Group (2).svg";



const ITEMS = [
  { id: "dining",   title: "Dining",   img: imgDining  },
  { id: "living",   title: "Living",   img: imgLiving  },
  { id: "bedroom",  title: "Bedroom",  img: imgBed     },
];

export default function RangeSection() {
  return (
    <section className="range">
      <div className="range__container">
        <h2 className="range__title">Browse The Range</h2>
        <p className="range__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="range__grid">
          {ITEMS.map(it => (
            <article key={it.id} className="range__card">
              <div className="range__media">
                <img src={it.img} alt={it.title} />
              </div>
              <h3 className="range__caption">{it.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
