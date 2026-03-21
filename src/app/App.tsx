import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Games } from "./components/Games";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#eef4ff] text-slate-950">
      <Header />
      <main>
        <Hero />
        <Games />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
