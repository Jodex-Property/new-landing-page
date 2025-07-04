import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "../ui/button";
import { BlurFadeDemo } from "./hero-image";
import Link from "next/link";
import SearchSharedApartment from "./search-shared-apartment";

export const HeroContent = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 py-20 sm:py-32 lg:py-0 my-16 sm:my-24 lg:my-40">
      {/*<div className="my-auto">
        <p className="mt-6 max-w-[60ch] text-base sm:text-lg">
          At Jodex, we are committed to transforming the rental landscape across Africa. 
          Our vision is to revolutionize the rental ecosystem by fostering transparency, 
          delivering unmatched convenience, and promoting financial empowerment for both landlords and tenants.
        </p>
        <p className="mt-6 max-w-[60ch] text-base sm:text-lg">
          Through innovative technology and tailored solutions, we simplify property management and enhance 
          rental experiences—ensuring peace of mind, security, and long-term value for all our users.
        </p>
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a href="#services-features">
            <Button size="lg" className="rounded-full text-base bg-[#020749] hover:bg-[#efde3c] hover:text-gray-900 shadow-none cursor-pointer">
              Explore Our Services <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </a>
        </div>
      </div>*/}
      <div className="my-auto">
        <h1 className="mt-6 mb-6  max-w-[20ch] text-4xl  font-bold text-[#020749] !leading-[1.2] tracking-tight">
          Smart Renting Made Simple.
        </h1>
        <SearchSharedApartment />
      </div>
      <div className="w-full aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-[calc(100vh-4rem)] rounded-xl mt-10 lg:mt-0">
        <BlurFadeDemo />
      </div>
    </div>
  );
};
