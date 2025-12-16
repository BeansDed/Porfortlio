import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background noise-overlay">
      <Navbar />
      <Hero />
      <BentoGrid />
      <div id="tech">
        <TechStack />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
