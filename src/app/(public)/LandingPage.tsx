// app/page.tsx (Landing page)
import Hero from "./Hero";
import { Testimonials } from "./Testimonials";
import Benefits from "./benefit";
import Services from "./Service";
import CommonTalents from "./talents";
import { HowItWorks } from "./Howitworks";
import FutureEnhancements from "./Future"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <CommonTalents />
      <HowItWorks />
      <Services />
      <Testimonials />
      <FutureEnhancements />
      <Footer />
    </>
  );
}
