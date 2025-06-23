const stats = [
  {
    value: "1200+",
    label: "tenants and landlords onboarded",
  },
  {
    value: "350+",
    label: "verified artisan partners",
  },
  {
    value: "85%",
    label: "user satisfaction rate",
  },
];

const OurStats = () => {
  return (
    <div className="-mt-25 flex items-center bg-image-stats">
      <div className="w-full max-w-screen-xl mx-auto py-10 px-4 sm:px-8 text-center text-white z-[2] relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Our Impact in Numbers
        </h2>
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-16 justify-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="max-w-[18ch] mx-auto flex flex-col items-center"
            >
              <span className="text-4xl sm:text-5xl font-semibold">{stat.value}</span>
              <p className="mt-2 text-base sm:text-[15px] font-bold capitalize">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStats;
