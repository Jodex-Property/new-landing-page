import Contact from "@/components/common/contact";

import { Hero } from "@/components/common/hero";
import OurPartners from "@/components/common/our-partners";
import OurStats from "@/components/common/our-stats";
import ServicesFeatures from "@/components/common/services-features";
import { TestimonialsUser } from "@/components/common/testimonals";



export default function Home() {
  return (
    <>
      <ServicesFeatures />
      <Hero />
      <OurPartners />
      <OurStats />
      <TestimonialsUser />
      <Contact />
    </>
  );
}
