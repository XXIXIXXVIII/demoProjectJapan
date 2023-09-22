import banner from "../assets/images/banner.jpg";
import banner_sp from "../assets/images/banner_sp.jpg";
import Advertisement from "./Advertisement";

export default function Main() {
  return (
    <main>
      <section className="banner">
        <div className="thumb">
          <img
            className="until_pc"
            loading="lazy"
            src={banner}
            width="1920"
            height="874"
            alt="banner"
          />
          <img
            className="until_sp"
            loading="lazy"
            src={banner_sp}
            width="390"
            height="49"
            alt="banner"
          />
        </div>
      </section>
      <Advertisement />
    </main>
  );
}
