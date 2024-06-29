"use client";
import Image from "next/image";
import React, { useMemo } from "react";

const ProgramCardComponent = ({ programData, index }) => {
  const bgGradient = programData ? programData.bgGradient : null;
  const bgGradColor = useMemo(() => {
    return {
      background: bgGradient
        ? `linear-gradient(257.43deg,#030a21,${bgGradient})`
        : "initial",
    };
  }, [bgGradient]);

  if (!programData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }
  let { programLevel, programName, duration, programMode, programBenefits } =
    programData;

  return (
    <div
      key={index}
      className={`w-[390px] rounded-lg  overflow-hidden flex flex-col items-start justify-start px-6 py-6 box-border  `}
      style={bgGradColor}
    >
      <div className="w-100% flex flex-row items-start justify-start gap-[21px] shrink-0 ">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[237px] max-w-full">
          <div className="w-auto rounded  box-border flex flex-row items-start justify-start py-0.5 px-[9px] border-[1px] border-solid border-white">
            <p className="relative text-white font-medium ">{programLevel}</p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-5xl text-white">
            <h3 className="m-0 relative text-2xl font-medium ">
              {programName}
            </h3>
            <div className=" flex flex-col items-start justify-start gap-[11px] text-sm text-gray-1900">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="h-[33px] flex flex-row items-start justify-start gap-[18.5px]">
                  <div className="flex items-start justify-start font-medium bg-slate-500 bg-opacity-50 rounded-md px-1 py-2">
                    <Image
                      width={25}
                      height={25}
                      className="pe-2"
                      alt="duration-clock"
                      src="/duration-clock.png"
                    />
                    {`Duration : ${duration} `}
                  </div>
                  <div className="h-[34px] w-px relative box-border border-r-[1px] border-solid border-gray-1100" />
                  <div className="rounded-5xs bg-gray-1000 flex flex-row items-start justify-start ">
                    {programMode.map((val, index) => {
                      return (
                        <div
                          key={index}
                          className="relative font-medium bg-slate-500 bg-opacity-50 rounded-md inline-block min-w-[46px] px-2 me-2 py-2"
                        >
                          {val.mode}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="h-[33px] flex flex-row items-start justify-start gap-[17.5px] text-base">
                  {programBenefits.map((val, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-start justify-start pt-1 px-0 pb-0"
                      >
                        <div className="relative">{val.benefits}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="self-stretch relative text-base whitespace-pre-wrap">{`Learn Top Design Tools - Figma, Invision  `}</div>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer mt-10 py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0">
        <span className="text-white">View Program</span>
        <span className="ml-2 font-semibold text-white text-2xl ">›</span>
      </button>
    </div>
  );
};

export default ProgramCardComponent;
