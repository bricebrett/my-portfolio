import Title from "./Title";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__row hero__row--top">
        <h1 className="hero__title">BRICE BRETTINGER</h1>
        {/* <div className="hero__photo">
          <img src="../images/photo-brice.jpg" alt="" />
        </div> */}
      </div>
      <div className="hero__row hero__row--bottom">
        <p className="hero__email">nom@site.com</p>
        <p className="hero__description">
          Hello, étant passionné par le web, je transforme des concepts en
          projets qui prennent vie à l’écran.
        </p>
      </div>
    </section>
  );
}
