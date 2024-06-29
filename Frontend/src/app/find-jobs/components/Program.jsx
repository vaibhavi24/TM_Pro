"use client";
import React, { useState } from "react";
import ProgramCard from "./ProgramCardComponent";

const ProgramPage = ({ programData }) => {
  if (!programData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }
  let { Title, SubTitle, programsData } = programData;

  return (
    <section
      id="extensive-program"
      className={`w-[100%] mt-8 self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[90px] box-border max-w-full text-left text-21xl text-dodgerblue font-sub-heading `}
    >
      <div className="w-[85%] mx-auto flex flex-wrap items-start justify-start gap-[99.5px] max-w-full ">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24.7px] max-w-full">
          <h1 className="text-[#0466C1] pt-10 text-start font-semibold text-3xl tracking-wider">
            {Title}
          </h1>
          <p className="m-0 self-stretch relative text-md text-gray-1400">
            {SubTitle}
          </p>
        </div>
        <div className="w-[100%] flex flex-row items-start justify-start gap-[20px] max-w-full text-base text-silver-100">
          <div className=" flex flex-wrap items-start justify-start gap-[30px] min-w-[460px] max-w-full">
            {programsData.map((pd, index) => {
              return <ProgramCard key={index} programData={pd} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramPage;
