import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ngozi A.",
    designation: "Tenant",
    company: "Lagos, Nigeria",
    testimonial:
      "Finding a place to rent used to be stressful and uncertain. With JODEX, everything was transparent and seamless. I found my apartment, signed my lease, and moved in—all within a few days!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Stephen K.",
    designation: "Landlord",
    company: "Abuja, Nigeria",
    testimonial:
      "Managing my properties used to be chaotic. JODEX helped me streamline everything—from listings to payments to tenant screening. I now spend more time growing my portfolio, not fixing problems.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Fatima T.",
    designation: "Landlord",
    company: "Abuja, Nigeria",
    testimonial:
      "Thanks to JODEX, I receive my rent on time, my tenants are happy, and my properties are always occupied. It's a win-win for everyone.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Aisha O.",
    designation: "Tenant",
    company: "Abuja, Nigeria",
    testimonial:
      "As a young professional, budgeting for rent was tough. JODEX's flexible payment solutions made renting possible without overwhelming my finances. They've truly thought of everything",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel M.",
    designation: "Real Estate Agent",
    company: "Lagos, Nigeria",
    testimonial:
      "JODEX has empowered me to serve clients better. The tools are smart, the support is incredible, and the trust factor has gone through the roof. This is the future of real estate in Africa.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const UserTestimonial = () => (
  <div className="min-h-screen flex justify-center items-center py-12">
    <div className="h-full w-full">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center text-[#020749] capitalize mb-10">
        What Our Users Say
      </h3>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-96 max-w-sm bg-accent rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default UserTestimonial;
