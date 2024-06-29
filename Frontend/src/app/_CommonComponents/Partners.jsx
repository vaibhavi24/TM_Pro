import Image from "next/image";

const Partners = () => {
  return (
    <div className="w-[100%] my-10">
      <div className="w-[80%] mx-auto">
        <h2 className="mb-10 uppercase text-3xl text-[#0466C1] font-bold ">
          OUR PARTNERS
        </h2>
        <div className="w-[100%] mx-auto flex items-start gap-4 justify-between ">
          <div className="w-[30%] flex flex-col gap-3">
            <h2 className="mb-3 capitalize text-3xl text-[#17467D] font-bold ">
              Our Strategic <span className="block">Alliance & Hiring</span>{" "}
              Partner
            </h2>
            <p className="text-[#0466C1] text-start text-md mb-10">
              we are having alliance with more than 150 top startups and SMEs
              all across the nation.
            </p>
            <button className="text-black text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] w-[250px] h-[42px] rounded box-border flex  items-center justify-center gap-3 whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span className="w-full ">Join us as a Hiring Partner</span>
              <span className="mr-6 font-semibold text-2xl w-full">›</span>
            </button>
          </div>
          <div className="w-1/2 flex items-start">
            <div className="flex flex-wrap justify-between items-start w-full ">
              {[
                "Group117160",
                "Group117161",
                "Group117159",
                "Group117156",
                "Group117162",
                "Group117168",
                "Group117158",
                "Group117163",
                "Group117157",
                "Group117155",
                "Group117165",
                "Group117167",
              ].map((val, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-start w-1/4 "
                  >
                    <Image
                      width={150}
                      height={100}
                      src={`/${val}.png`}
                      alt="Logo 1"
                      className="h-full w-full "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
