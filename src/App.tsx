import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Practice from "./components/sections/Practice";
import Philosophy from "./components/sections/Philosophy";
import Team from "./components/sections/Team";
import Methodology from "./components/sections/Methodology";
import Contact from "./components/sections/Contact";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();

  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Practice />
        <Philosophy />
        <Team />
        <Methodology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
