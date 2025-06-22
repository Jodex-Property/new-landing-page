import { Button } from "@/components/ui/button";
// import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";

const teamMembers = [
  {
    name: "Clement Sampson",
    title: "Founder & CEO",
    imageUrl:
      "/img/team/sam-clement-jodex.jpeg",
  },
  {
    name: "Daniel Antiaobong",
    title: "Legal Counsel",
    imageUrl:
      "/img/team/daniel-barrister-team-image.jpeg",
  },
  {
    name: "Bob Smith",
    title: "COO",
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Folaremi Dixon",
    title: "CTO",
    imageUrl:
      "/img/team/fola-dixon-jodex.JPG",
  },
];

const OurTeam = () => {
  return (
    <div className="flex flex-col justify-center py-8 sm:py-12 px-6 lg:px-8 max-w-screen-xl mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-[#020749]">
          Meet Our Team
        </h2>
        <p className="mt-6 text-base sm:text-lg">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-center gap-3">
          <Button size="lg" className="bg-[#020749] hover:bg-[#efde3c] hover:text-gray-900 cursor-pointer font-bold">Open Positions</Button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-full aspect-square rounded-lg object-cover bg-secondary bg-center"
              width={600}
              height={600}
            />
            <h3 className="mt-4 text-lg font-semibold text-[#020749] text-center">{member.name}</h3>
            <p className="text-muted-foreground text-sm font-bold text-center">{member.title}</p>
            {/*<div className="mt-4 flex items-center gap-2.5">
              <Button
                className="bg-accent hover:bg-accent text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <TwitterIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <DribbbleIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <TwitchIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
            </div>*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
