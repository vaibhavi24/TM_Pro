import Image from "next/image";

const GreatRewardsPage = () => {
  let highLights_1 = [
    "Program Highlights ",
    "Program Highlights ",
    "Program Highlights ",
    "Program Highlights ",
  ];

  let highLights_2 = [
    "Program Highlights ",
    "Program Highlights ",
    "Program Highlights ",
    "Program Highlights ",
  ];

  return (
    <>
      <section className="w-[100%] my-10 p-3">
        <div className="w-[80%] mx-auto flex justify-between gap-14">
          {/* Content section */}
          <div className="w-1/2 ">
            <h1
              className="text-[#0466C1] text-3xl uppercase font-bold tracking-wide
              "
            >
              Refer & Earn Great Rewards
            </h1>
            <h2 className="font-bold text-md my-4 ">
              Apple products, Amazon Voucher & much more to win!
            </h2>
            <p className="text-left my-4">
              if your friend family or colleague looking for a reputed institute
              for learning high tech skill to land job in it industry want to
              switch domain and appraisal you can help your dear one to get job
              ready program by referring them one of our 17+ programs in more
              than 7+ categories. program category why your referee will love
              our programs.
            </p>
            <h2 className="uppercase font-semibold text-lg text-[#0466C1] mt-2">
              Program Highlights
            </h2>

            {/* List items */}
            <div className="w-full flex justify-around flex-wrap mb-10">
              <div>
                {highLights_1.map((hl, index) => {
                  return (
                    <ul
                      key={index}
                      className="list-disc marker:text-blue-400 marker:text-[30px]"
                    >
                      <li>{hl}</li>
                    </ul>
                  );
                })}
              </div>
              <div>
                {highLights_2.map((hl, index) => {
                  return (
                    <ul
                      key={index}
                      className="list-disc marker:text-blue-400 marker:text-[30px]"
                    >
                      <li>{hl}</li>
                    </ul>
                  );
                })}
              </div>
            </div>

            {/* Button */}
            <button className="bg-white max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span>Login to Refer</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                ›
              </span>
            </button>
          </div>

          {/* Image section */}
          <div className="w-1/2 h-[400px]">
            <Image width={300} height={300} style={{width: "auto", height: "auto"}}
              src="/refer&earnimg.png"
              alt="refer&earnimg"
              className=" h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GreatRewardsPage;
