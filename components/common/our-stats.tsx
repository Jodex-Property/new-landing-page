const OurStats = () => {
  return (
    <div className="-mt-25 flex items-center bg-image-stats">
      {" "}
      <div className="max-w-screen-xl mx-auto py-12 text-center text-white z-[2] relative">
        {" "}
        <h2 className="text-4xl md:text-5xl font-semibold">
          Our Impact in Numbers
        </h2>{" "}
    
        <div className="mt-8 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">
          {" "}
          <div className="max-w-[18ch]">
            {" "}
            <span className="text-5xl font-semibold">1200+</span>{" "}
            <p className="mt-2 text-[15px] font-bold capitalize">
              {" "}
              tenants and landlords onboarded{" "}
            </p>{" "}
          </div>{" "}
          <div className="max-w-[18ch]">
            {" "}
            <span className="text-5xl font-semibold">350+</span>{" "}
            <p className="mt-2 text-[15px] font-bold capitalize">
              {" "}
              verified artisan partners{" "}
            </p>{" "}
          </div>{" "}
          <div className="max-w-[18ch]">
            {" "}
            <span className="text-5xl font-semibold">85%</span>{" "}
            <p className="mt-2 text-[15px] font-bold capitalize">
              {" "}
              user satisfaction rate{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default OurStats;
