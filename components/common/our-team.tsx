import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamMembers = [
	{
		name: "Clement Sampson",
		title: "Founder & CEO",
		imageUrl: "/img/team/sam-clement-jodex.jpeg",
	},
	{
		name: "Daniel Antiaobong",
		title: "Legal Counsel",
		imageUrl: "/img/team/daniel-barrister-team-image.jpeg",
	},
	{
		name: "Ifiok Paul Akpan",
		title: "COO",
		imageUrl: "/img/team/akpan-jodex-team.jpeg",
	},
	{
		name: "Folaremi Dixon",
		title: "CTO",
		imageUrl: "/img/team/fola-dixon-jodex.JPG",
	},
];

const OurTeam = () => {
	return (
		<div className="flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto gap-12 sm:gap-16">
			<div className="text-center max-w-2xl mx-auto">
				<h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#020749]">
					Meet Our Team
				</h2>
				<p className="mt-4 sm:mt-6 text-base sm:text-lg">
					Our philosophy is simple — hire a team of diverse, passionate people
					and foster a culture that empowers you to do your best work.
				</p>
				<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row-reverse sm:justify-center gap-3">
					<Button
						size="lg"
						className="bg-[#020749] hover:bg-[#efde3c] hover:text-gray-900 cursor-pointer font-bold"
					>
						Open Positions
					</Button>
				</div>
			</div>

			<div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12">
				{teamMembers.map((member) => (
					<div key={member.name} className="flex flex-col items-center">
						<div className="w-full max-w-[260px]">
							<Image
								src={member.imageUrl}
								alt={member.name}
								className="w-full aspect-square rounded-lg object-cover bg-secondary bg-center"
								width={600}
								height={600}
								priority
							/>
						</div>
						<h3 className="mt-4 text-base sm:text-lg font-semibold text-[#020749] text-center">
							{member.name}
						</h3>
						<p className="text-muted-foreground text-xs sm:text-sm font-bold text-center">
							{member.title}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurTeam;
