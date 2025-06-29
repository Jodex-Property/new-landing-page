import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";

const AboutHero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto pt-28">
          <Badge className="bg-[#020749] text-white rounded-full py-1 px-10 border-none">
            About JODEX
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Smart Renting Made Simple.
          </h1>
          <p className="mt-6 max-w-[60ch] text-base sm:text-lg">
          At Jodex, we are committed to transforming the rental landscape across Africa. 
          Our vision is to revolutionize the rental ecosystem by fostering transparency, 
          delivering unmatched convenience, and promoting financial empowerment for both landlords and tenants.
        </p>
        <p className="mt-6 max-w-[60ch] text-base sm:text-lg">
          Through innovative technology and tailored solutions, we simplify property management and enhance 
          rental experiences—ensuring peace of mind, security, and long-term value for all our users.
        </p>
          
        </div>
        <div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-image-about rounded-xl lg:rounded-none" />
      </div>
    </div>
  );
};

export default AboutHero;
