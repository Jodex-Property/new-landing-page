"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function TestimonialsUser() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden z-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center text-[#020749] capitalize mb-10">
        What Our Users Say
      </h3>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Thanks to JODEX, I receive my rent on time, my tenants are happy, and my properties are always occupied. It's a win-win for everyone.",
    name: "Fatima T.",
    title: "Landlord",
    location: "Abuja, Nigeria",
  },
  {
    quote:
      "Managing my properties used to be chaotic. JODEX helped me streamline everything—from listings to payments to tenant screening. I now spend more time growing my portfolio, not fixing problems.",
    name: "Stephen K.",
    title: "Landlord",
    location: "Abuja, Nigeria",
  },
  {
    quote: "Finding a place to rent used to be stressful and uncertain. With JODEX, everything was transparent and seamless. I found my apartment, signed my lease, and moved in—all within a few days!",
    name: "Ngozi A.",
    title: "Tenant",
    location: "Lagos, Nigeria",
  },
  {
    quote:
      "As a young professional, budgeting for rent was tough. JODEX's flexible payment solutions made renting possible without overwhelming my finances. They've truly thought of everything",
    name: "Aisha O.",
    title: "Tenant",
    location: "Abuja, Nigeria",
  },
  {
    quote:
      "JODEX has empowered me to serve clients better. The tools are smart, the support is incredible, and the trust factor has gone through the roof. This is the future of real estate in Africa.",
    name: "Daniel M.",
    title: "Real Estate Agent",
    location: "Lagos, Nigeria",
  },
];
