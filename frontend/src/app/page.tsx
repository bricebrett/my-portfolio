import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";

export default function HomePage() {
  return (
    <div>
      <main className="main-content">
        <Hero />
        <Works />
        <About />
      </main>
    </div>
  );
}
