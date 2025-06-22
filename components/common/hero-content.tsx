import { ArrowUpRight, CirclePlay } from "lucide-react";
// import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { BlurFadeDemo } from "./hero-image";
// import { TextReveal } from "../magicui/text-reveal";

export const HeroContent = () => {
  return (
    <div className="max-w-screen-xl my-40 w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-40 lg:py-0">
      <div className="my-auto">
        {" "}
        <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold text-[#020749] !leading-[1.2] tracking-tight">
          {" "}
            Smart Renting Made Simple{" "}
        </h1>{" "}
        <p className="mt-6 max-w-[60ch] text-lg">
          {" "}
          At Jodex, we are committed to transforming the rental landscape across Africa. 
          Our vision is to revolutionize the rental ecosystem by fostering transparency, 
          delivering unmatched convenience, and promoting financial empowerment for both landlords and tenants.{" "}
        </p>{" "}
        <p className="mt-6 max-w-[60ch] text-lg">
            {" "}
            Through innovative technology and tailored solutions, we simplify property management and enhance 
            rental experiences—ensuring peace of mind, security, and long-term value for all our users.{" "}
        </p>{" "}
        <div className="mt-12 flex items-center gap-4">
          {" "}
          <Button size="lg" className="rounded-full text-base bg-[#020749] hover:bg-[#efde3c] hover:text-gray-900 shadow-none cursor-pointer">
            {" "}
            Explore Our Services <ArrowUpRight className="!h-5 !w-5" />{" "}
          </Button>{" "}
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none cursor-pointer"
            id="#services-features"
          >
            {" "}
            <CirclePlay className="!h-5 !w-5" /> Watch Demo{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="w-full aspect-video lg:aspect-auto  lg:h-[calc(100vh-4rem)] rounded-xl">
        <BlurFadeDemo />
      </div>
    </div>
  );
};
