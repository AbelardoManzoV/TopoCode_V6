import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TechMarquee } from "./components/TechMarquee";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-topo-bg overflow-x-hidden">
      <a
        href="#contacto"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] bg-topo-blue text-white px-4 py-2 rounded-lg"
      >
        {t.language.skipToContent || "Saltar al contenido"}
      </a>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
