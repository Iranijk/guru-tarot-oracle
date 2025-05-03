
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Arcanos from "@/components/Arcanos";
import Mission from "@/components/Mission";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-garamond">
      <Header />
      <Hero />
      <About />
      <Arcanos />
      <Mission />
      <Process />
      <FAQ />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
