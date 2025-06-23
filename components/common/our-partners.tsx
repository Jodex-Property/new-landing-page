import Image from "next/image";

const OurPartners = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow shrink-0 bg-[#020749] basis-1/2"></div>
      <div className="relative grow">
        <div className="sm:absolute sm:-translate-y-1/2 top-0 inset-x-0 mx-auto w-full max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10 rounded-lg bg-background sm:shadow-lg dark:shadow-foreground/10 py-10 sm:py-14 px-4 sm:px-10">
          <div className="shrink-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#020749] capitalize">
              Partnered with
            </h3>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-xl lg:max-w-md xl:max-w-xl">
              Trusted by industry leaders and visionaries who are shaping the
              future, solving global challenges, and driving innovation forward.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-10">
            <div className="h-10 sm:h-12 md:h-14 flex items-center">
              <Image
                src="/img/zenith-logo.png"
                alt="Zenith"
                width={100}
                height={40}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-10 sm:h-12 md:h-14 flex items-center">
              <Image
                src="/img/fincra-logo.png"
                alt="Fincra"
                width={100}
                height={40}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
