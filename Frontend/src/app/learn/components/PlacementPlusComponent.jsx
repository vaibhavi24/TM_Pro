import Image from "next/image";

const PlacementPlus = ({}) => {
  let iconsData = [
    {
      img: "one-on-one-session",
      title: "One-on-one sessions",
    },
    {
      img: "career-guidance",
      title: "Career guidance",
    },
    {
      img: "300+hiring-partners",
      title: "300+ Hiring partners",
    },
    {
      img: "resume-building",
      title: "Resume building",
    },
    {
      img: "mock-interview",
      title: "Mock interviews",
    },
    {
      img: "soft-skills-trainings",
      title: "Soft skills training",
    },
  ];
  return (
    <div className="w-full mx-auto relative">
      {/* Background section */}
      <Image
        width={500}
        height={400}
        style={{ width: "100%", height: "100%" }}
        className="w-full h-full object-cover z-0"
        alt=""
        src="/placement-plus-bg.png"
      />
      <div className="bg-slate-600 w-full h-full absolute top-0 left-0 opacity-70 z-[1]"></div>

      {/* Content section */}
      <div className="w-[70%] absolute top-3 left-[10%] mx-auto my-6 flex flex-col justify-between gap-2 z-[2] text-white">
        {/* Heading section */}
        <div className="my-3">
          <h1 className="text-[#78B6FF] uppercase py-4 text-start font-semibold text-3xl tracking-wider">
            Land job opportunities with Placement Plus
          </h1>
          <p className="text-md ">
            Learn from the certified and real time working professionals.
          </p>
        </div>

        {/* Grid icons sections */}
        <div>
          <div className="w-[70%] my-8 grid grid-cols-3 grid-rows-2 gap-3 shadow-md">
            {iconsData.map((i, index) => {
              return (
                <div key={index} className=" p-3 w-[100%] col-span-1">
                  <Image
                    width={70}
                    height={70}
                    src={`/${i.img}.png`}
                    alt={i.title}
                  />
                  <h2 className="pt-3">{i.title}</h2>
                </div>
              );
            })}
          </div>
        </div>

        {/* Buttons section */}
        <div className="w-[70%] flex flex-col justify-between gap-20 my-8">
          <div className="bg-black text-white flex p-3 rounded-lg">
            <div className="w-[65%] ">
              <p className="text-sm text-slate-300">
                Boost your chances of getting placed by purchasing our Placement
                Plus program along with the certificate programs
              </p>
            </div>
            <div className="w-[35%] flex items-center justify-between ">
              <p className="w-1/3 text-md text-center font-semibold">
                YOU GET UPTO
              </p>
              <p className="w-1/3 text-3xl text-[#78B6FF] text-center font-semibold">
                22.2%
              </p>
              <p className="w-1/3 text-md font-semibold text-center">
                FEE WAVIER
              </p>
            </div>
          </div>

          <div className="mb-4">
            <button className="bg-transparent max-h-10 p-6 gap-1 border-2 border-white rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span>Learn More</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementPlus;
