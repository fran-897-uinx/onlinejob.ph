// app/page.tsx (Landing page)
import Hero from "./Hero";
import { Testimonials } from "./Testimonials";
import Benefits from "./benefit";
import Services from "./Service";
import CommonTalents from "./talents";
import { HowItWorks } from "./Howitworks";
import FutureEnhancements from "./Future"

export default function Landing() {
  return (
    <>
      <Hero />
      <Benefits />
      <CommonTalents />
      <HowItWorks />
      <Services />
      <Testimonials />
      <FutureEnhancements/>
    </>
  );
}
