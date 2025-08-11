import Title from "@/components/Title";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-page__container">
        <header className="contact-page__header">
          <Title text="SEND A REQUEST" align="left" />
        </header>

        <div className="contact-page__grid">
          <div className="contact-page__info">nom@site.com</div>

          <ContactForm className="contact-page__form" />
        </div>
      </div>
    </section>
  );
}
