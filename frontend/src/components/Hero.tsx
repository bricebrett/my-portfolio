export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__row hero__row--top">
        <h1 className="hero__title">BRICE BRETTINGER</h1>
        <div className="hero__photo">
          <img src="../public/images/Photo d’identité .pdf" alt="" />
        </div>
      </div>
      <div className="hero__row hero__row--bottom">
        <p className="hero__email">nom@site.com</p>
        <p className="hero__description">
          Lorem ipsum dolor sit amet, consectetur elit. Integer vitae justo
          sapien. Aenean luctus, tortor et at viverra. Donec sed nunc. Proin
          feugiat.
        </p>
      </div>
    </section>
  );
}
