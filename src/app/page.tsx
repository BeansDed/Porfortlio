import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import BentoGrid from "@/components/BentoGrid";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-accent-blue/15 selection:text-accent-blue overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_20%_-10%,rgba(201,162,39,0.14),transparent_60%),radial-gradient(900px_450px_at_90%_0%,rgba(30,78,140,0.12),transparent_60%),linear-gradient(180deg,#F6F0E6_0%,#F9F4EC_50%,#F6F0E6_100%)]" />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <BentoGrid />
      <Education />
      <Footer />
    </main>
  );
}
