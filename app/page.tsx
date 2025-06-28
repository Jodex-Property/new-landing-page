import Contact from "@/components/common/contact";
import FooterComps from "@/components/common/footer";
import { Hero } from "@/components/common/hero";
import OurPartners from "@/components/common/our-partners";
import OurStats from "@/components/common/our-stats";
import OurTeam from "@/components/common/our-team";
import ServicesFeatures from "@/components/common/services-features";

export default function Home() {
  return (
    <>
      <ServicesFeatures />
      <Hero />
      <OurPartners />
      <OurStats />
      <OurTeam />
      <Contact />
      <FooterComps />
    </>
  );
}
