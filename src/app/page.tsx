import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import BentoGrid from "@/components/BentoGrid";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="site-main" data-ui-style="rebel">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <BentoGrid />
      <Experience />
      <About />
      <Education />
      <Footer />
    </main>
  );
}
