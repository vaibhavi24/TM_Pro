import "../style.css";
import Image from "next/image";

const TechmomentumAdvantageComponent = ({}) => {
  let advantageData = [
    ["Program Duration", "3-4 Months", "15-45 hrs", "4-12 Months"],
    ["Comprehensive Job Ready Syllabus", "red-tick", "red-tick", "green-tick"],
    ["% of Practical In Whole Program", "20%-30%", "10%-15%", "40%-55%"],
    ["Capstone Industry Projects", "2-3 Project", "red-tick", "5-10 Project"],
    [
      "Min yrs of Industry Experience Trainer",
      "0-2 year",
      "1-4 year",
      "2-10 year",
    ],
  ];
  let [
    courseCurriculum,
    Local_Training_Institute,
    online_platform,
    tech_momentum,
  ] = advantageData;
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }
  return (
    <section
      className={` w-[100%] self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[60px] max-w-full`}
    >
      <div className=" flex flex-row items-start justify-start pt-0 px-0 pb-[25.3px] box-border max-w-full">
        <div className="flex-1 bg-[#04050A] overflow-hidden flex flex-col items-start justify-start pt-[77px] px-0 pb-[127px] box-border relative gap-[23px] max-w-full text-white">
          {/* Heading section */}
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <Image
              width={500}
              height={300}
              style={imgStyling}
              className="h-[305px] flex-1 relative max-w-full overflow-hidden"
              loading="lazy"
              alt="thumbnail"
              src="/group-117011.svg"
            />
            <b className="w-[5rem] absolute top-[50px] left-[10%] leading-[132.4%] uppercase z-[1] text-[#78b6ff] text-start font-semibold text-3xl tracking-wider">
              TechMomentum Advantage
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-center">
            <div className="flex flex-col items-center justify-start gap-[179px] max-w-full ">
              <div className="flex flex-col items-start justify-start gap-[76px] ">
                <div className="flex flex-row items-start justify-center py-0 box-border max-w-full">
                  {/* Second section heading */}
                  <div className="flex flex-col items-start justify-start gap-[23px] max-w-full">
                    <h1 className=" relative leading-[47px] uppercase  max-w-full text-[#78b6ff] text-start font-semibold text-3xl tracking-wider">
                      Why Choose TechMomentum?
                    </h1>
                    <p className="relative text-base text-gray-300 ">
                      Check out what sets us apart and makes our programs the
                      best online training and certification courses in India
                    </p>
                  </div>
                </div>

                {/* Image section */}
                <div className="flex items-center justify-center gap-[100px] max-w-full text-right text-13xl text-white mt-10 ">
                  <div className="w-[400px] flex flex-col items-start justify-end mx-[15px] box-border max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[139px] ">
                      <div className="self-stretch flex flex-col items-end justify-start gap-[24px]">
                        <h1 className=" text-start font-medium text-2xl">
                          Skill Based learning
                        </h1>
                        <p className="text-end text-base font-medium text-gray-300 ">{`Since our inception in 2004, ValueCoders has been delivering IT outsourcing services `}</p>
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-start gap-[24px]">
                        <h1 className="text-start font-medium text-2xl ">
                          Skill Based learning
                        </h1>
                        <p className="text-end text-base font-medium text-gray-300">{`Since our inception in 2004, ValueCoders has been delivering IT outsourcing services `}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative group max-h-full ">
                    <Image
                      width={400}
                      height={400}
                      className="w-[15rem] relative  overflow-hidden shrink-0 max-w-full"
                      loading="lazy"
                      alt="Center image"
                      src="/ellipse-680@2x.png"
                    />

                    <div className="absolute top-1/2 right-0"></div>
                  </div>

                  <div className="w-[400px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border max-w-full text-left">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[139px] mq450:gap-[69px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                        <h1 className="text-start font-medium text-2xl">
                          Skill Based learning
                        </h1>
                        <p className="text-start text-base font-medium text-gray-300">{`Since our inception in 2004, ValueCoders has been delivering IT outsourcing services `}</p>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                        <h1 className="text-start font-medium text-2xl">
                          Skill Based learning
                        </h1>
                        <p className="text-start text-base font-medium text-gray-300">{`Since our inception in 2004, ValueCoders has been delivering IT outsourcing services `}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TechMomentum Advantages Second Section */}
              <div className="w-[90%] mx-auto ">
                <h1 className="text-[#78B6FF] font-semibold text-3xl uppercase text-start mb-8">
                  Techmomentum Advantage
                </h1>
                <div className="w-full flex justify-between gap-4 items-center ">
                  {/* table section */}
                  <div className="w-[70%] h-[400px]">
                    <table className="w-full h-full table-fixed bg-[#1F1F1F] rounded-md">
                      <thead className="">
                        <tr>
                          <th className=" py-4 text-center text-[14px] font-semibold  uppercase text-[#A1CCFF]">
                            Course Curriculum
                          </th>
                          <th className=" py-4 text-center text-[14px] font-semibold  uppercase text-[#A1CCFF]">
                            Local Training Institute
                          </th>
                          <th className=" py-4 text-center text-[14px] font-semibold  uppercase text-[#A1CCFF]">
                            Online Platform
                          </th>
                          <th className=" py-4 text-center text-[14px] font-semibold  uppercase text-[#A1CCFF]">
                            Tech Momentum
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {/* coursecurriculum row */}
                        <tr className="border-b-2 border-slate-700">
                          {courseCurriculum.map((cc, index) => {
                            return (
                              <td
                                key={index}
                                className="px-6 py-4 text-center text-sm font-semibold text-white"
                              >
                                {cc === "red-tick" ? (
                                  <div className="flex justify-center">
                                    <Image
                                      width={20}
                                      height={20}
                                      style={{width: "28px", height: "28px"}}
                                      src="/red-tick.png"
                                      alt="red-tick"
                                      className="mx-auto"
                                    />
                                  </div>
                                ) : cc === "green-tick" ? (
                                  <div className="flex justify-center">
                                    <Image
                                      width={20}
                                      height={20}
                                      style={{width: "28px", height: "28px"}}
                                      src="/green-tick.png"
                                      alt="green-tick"
                                      className="mx-auto"
                                    />
                                  </div>
                                ) : cc === "Program Duration" ? (
                                  <p className="text-start">{cc}</p>
                                ) : (
                                  cc
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        {/* local training institute row */}
                        <tr className="border-b-2 border-slate-700">
                          {Local_Training_Institute.map((lt, index) => {
                            return (
                              <td
                                key={index}
                                className="px-6 py-4 text-center text-sm font-semibold text-white"
                              >
                                {lt === "red-tick" ? (
                                  <div className="flex justify-center">
                                    <Image
                                      width={20}
                                      height={20}
                                      style={{width: "28px", height: "28px"}}
                                      src="/red-tick.png"
                                      alt="red-tick"
                                      className="mx-auto"
                                    />
                                  </div>
                                ) : lt === "green-tick" ? (
                                  <div className="flex justify-center">
                                    <Image
                                      width={20}
                                      height={20}
                                      style={{width: "28px", height: "28px"}}
                                      src="/green-tick.png"
                                      alt="green-tick"
                                      className="mx-auto"
                                    />
                                  </div>
                                ) : lt ===
                                  "Comprehensive Job Ready Syllabus" ? (
                                  <p className="text-start">{lt}</p>
                                ) : (
                                  lt
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        {/* online platform column */}
                        <tr className="border-b-2 border-slate-700">
                          {online_platform.map((op, index) => {
                            return (
                              <td
                                key={index}
                                className="px-6 py-4 text-center text-sm font-semibold text-white"
                              >
                                {op === "red-tick" ? (
                                  <div className="flex justify-center">
                                    <Image
                                      width={20}
                                      height={20}
                                      style={{width: "28px", height: "28px"}}
                                      src="/red-tick.png"
                                      alt="red-tick"
                                      className="mx-auto"
                                    />
                                  </div>
                                ) : op === "green-tick" ? (
                                  <div className="flex justify-center">
                                    <Image
                                      width={20}
                                      height={20}
                                      style={{width: "28px", height: "28px"}}
                                      src="/green-tick.png"
                                      alt="green-tick"
                                      className="mx-auto"
                                    />
                                  </div>
                                ) : op === "% of Practical In Whole Program" ? (
                                  <p className="text-start">{op}</p>
                                ) : (
                                  op
                                )}
                              </td>
                            );
                          })}
                        </tr>

                        {/* tech momentum column */}
                        <tr className="border-b-2 border-slate-700">
                          {tech_momentum.map((tm, index) => {
                            return (
                              <td
                                key={index}
                                className="px-6 py-4 text-center text-sm font-semibold text-white"
                              >
                                {tm === "red-tick" ? (
                                  <div className="flex justify-center">
                                    <Image
                                      width={20}
                                      height={20}
                                      style={{width: "28px", height: "28px"}}
                                      src="/red-tick.png"
                                      alt="red-tick"
                                      className="mx-auto"
                                    />
                                  </div>
                                ) : tm === "green-tick" ? (
                                  <div className="flex justify-center">
                                    <Image
                                      width={20}
                                      height={20}
                                      style={{width: "28px", height: "28px"}}
                                      src="/green-tick.png"
                                      alt="green-tick"
                                      className="mx-auto"
                                    />
                                  </div>
                                ) : tm === "Capstone Industry Projects" ? (
                                  <p className="text-start">{tm}</p>
                                ) : (
                                  tm
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* graph section */}
                  <div className="w-[40%] h-[400px] p-3 rounded-md bg-[#1F1F1F]">
                    <div className="w-full h-full relative ">
                      <div className="flex flex-col justify-end gap-3 h-full w-full">
                        <div className="flex items-end justify-around gap-6 box-border mx-auto border-b-4 border-[#27296C] w-[95%]">
                          <div className="barBg h-[130px] rounded-t-sm ms-14 "></div>
                          <div className="barBg h-[75px] rounded-t-sm ms-14"></div>
                          <div className="barBg h-[200px] rounded-t-sm mx-auto"></div>
                        </div>
                        <div className="flex justify-between gap-2 box-border mx-8">
                          <p className="font-semibold text-wrap text-sm text-center opacity-80 mx-auto ">
                            Local{" "}
                            <span className="inline-block">
                              Training Institute
                            </span>
                          </p>
                          <p className="font-semibold opacity-80 text-sm text-center mx-auto pe-8">
                            Online Platform
                          </p>
                          <p className="font-semibold opacity-80 text-sm text-end">
                            TechMomentum
                          </p>
                        </div>
                      </div>
                      <div className="h-[110px] absolute top-[25px] left-6">
                        <div className="">

                        <Image
                          width={5}
                          height={0}
                          style={{width: "auto", height: "auto"}}
                          src="/graph-line.png"
                          alt="graph-line"
                          />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechmomentumAdvantageComponent;
