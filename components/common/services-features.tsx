import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, BanknoteArrowUp, CheckCheck, HandCoins, Handshake, HousePlus, NotebookText, PiggyBank, Settings2, Users, Wallet } from "lucide-react";
import Link from "next/link";
// import { BlurFade } from "../magicui/blur-fade";

const ServicesFeatures = () => {
  return (
    <section className="min-h-screen flex items-center justify-center mt-28" id="services-features">
      <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] text-[#020749] font-bold tracking-tight">
          Rent Smarter. Live Better. Manage Easier.
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          
            {/* Card 1 */}
            <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
              {/* Media 1 Mobile */}
              <div className="md:hidden landlord-feature-image-bg mb-6 aspect-video w-full bg-background border rounded-xl"></div>

              <span className="text-2xl font-semibold tracking-tight">
                For Landlords
              </span>

              <ul className="mt-6 space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <CheckCheck className="shrink-0" />
                    <p className="-mt-0.5">
                      Guaranteed & Early Rent
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Wallet className="shrink-0" />
                    <p className="-mt-0.5">
                      Financial Security
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Users className="shrink-0" />
                    <p className="-mt-0.5">
                      Access to Trusted Artisans
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <HousePlus className="shrink-0" />
                    <p className="-mt-0.5">
                      Hassle-Free Property Management
                    </p>
                  </div>
                </li>
              </ul>

              <Link href="https://landlord.jodex.net" target="_blank" rel="noopener noreferrer">
                <Button className="mt-6 w-full bg-[#020749] hover:bg-[#efde3c] text-white hover:text-gray-900 cursor-pointer">
                    List Your Property Now  <ArrowRight />
                </Button>
              </Link>
            </div>
            {/* Media 1 Desktop */}
            <div className="hidden md:block border border-border/80 landlord-feature-image-bg rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>
          
          {/* Media 2 Desktop */}
          <div className="hidden md:block border border-border/80 tenant-feature-image-bg rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>
          {/* Card 2 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl"></div>

            <span className="text-2xl font-semibold tracking-tight">
              For Tenants
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <PiggyBank className="shrink-0" />
                  <p className="-mt-0.5">
                    Flexible Rent-Saving Plans
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <BadgeCheck className="shrink-0" />
                  <p className="-mt-0.5">
                    Access to Verified Listings
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <NotebookText className="shrink-0" />
                  <p className="-mt-0.5">
                    Personality Test for Shared Living
                  </p>
                </div>
              </li>
            </ul>

            <Link href="https://tenant.jodex.net" target="_blank" rel="noopener noreferrer">
              <Button className="mt-6 w-full bg-[#020749] hover:bg-[#efde3c] text-white hover:text-gray-900 cursor-pointer">
                  Get Started with Smarter Renting <ArrowRight />
              </Button>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 3 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl"></div>

            <span className="text-2xl font-semibold tracking-tight">
              For House Agents
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <BadgeCheck className="shrink-0" />
                  <p className="-mt-0.5">
                    Access to Verified Listings & Leads
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Handshake className="shrink-0" />
                  <p className="-mt-0.5">
                    Fast & Secure Deal Closures
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <HandCoins className="shrink-0" />
                  <p className="-mt-0.5">
                    Fair Commission Structure
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <BanknoteArrowUp className="shrink-0" />
                  <p className="-mt-0.5">
                    Expand Network & Grow Income
                  </p>
                </div>
              </li>
            </ul>

            <Link href="https://agent.jodex.net" target="_blank" rel="noopener noreferrer">
              <Button className="mt-6 w-full bg-[#020749] hover:bg-[#efde3c] text-white hover:text-gray-900 cursor-pointer">
                  Join as an Agent Today <ArrowRight />
              </Button>
            </Link>
          </div>
          {/* Media 3 Desktop */}
          <div className="hidden md:block border border-border/80 agent-feature-image-bg rounded-xl col-span-1 md:col-span-3 lg:col-span-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures;
