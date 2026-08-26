import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Worlds from "@/components/Worlds";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="lg:pl-16">
      <Hero />
      <Marquee />
      <About />
      <Worlds />
      <FeaturedWork />
      <Services />
      <Footer />
    </main>
  );
}