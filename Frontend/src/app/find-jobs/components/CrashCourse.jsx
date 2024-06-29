import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CarouselCardComponent from "./carouselCardComponent";

const CrashCourse = ({ crashCourseData }) => {
  if (!crashCourseData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }

  let { Title, SubTitle, courseData } = crashCourseData;

  let carouselItemData = [
    {
      figmaCourse: "Figma Course",
      propBackground: "linear-gradient(247.4deg,_#fff,_#cad6ff)",
      propPadding: "24px 30px 28px",
      propBackground1: "linear-gradient(110.24deg,_#00a3ff,_#0046fb)",
      bgColor: 767880,
    },
    {
      figmaCourse: "Design System Course",
      propBackground: "linear-gradient(247.4deg, #fff, #eeffca)",
      propPadding: "24px 30px 28px",
      propBackground1: "linear-gradient(110.24deg, #7ac500, #95ba67)",
    },
    {
      figmaCourse: "UI Design Bootcamp",
      propBackground: "linear-gradient(247.4deg,#fff,#ffcadd)",
      propPadding: "24px 30px 28px",
      propBackground1: "linear-gradient(65.63deg,#ff0000,#990000)",
    },
    {
      figmaCourse: "Figma Course",
      propBackground: "linear-gradient(247.4deg,_#fff,_#cad6ff)",
      propPadding: "24px 30px 28px",
      propBackground1: "linear-gradient(110.24deg,_#00a3ff,_#0046fb)",
      bgColor: 767880,
    },
    {
      figmaCourse: "Design System Course",
      propBackground: "linear-gradient(247.4deg, #fff, #eeffca)",
      propPadding: "24px 30px 28px",
      propBackground1: "linear-gradient(110.24deg, #7ac500, #95ba67)",
    },
    {
      figmaCourse: "UI Design Bootcamp",
      propBackground: "linear-gradient(247.4deg,#fff,#ffcadd)",
      propPadding: "24px 30px 28px",
      propBackground1: "linear-gradient(65.63deg,#ff0000,#990000)",
    },
  ];

  return (
    <section
      id="crashCourse"
      className="flex flex-col items-center justify-start py-0 box-border w-[100%] my-10"
    >
      <div className="w-[85%] flex flex-row items-start justify-start p-5 mx-auto box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[23px] shrink-0 max-w-full">
          <h1 className="text-[#0466C1] text-start font-bold text-3xl tracking-wider">
            {Title}
          </h1>
          <p className="text-sm text-black">{SubTitle}</p>
        </div>
      </div>
      <div className="w-[85%] max-w-full flex justify-center my-16">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[90%] "
        >
          <CarouselContent>
            {courseData.map((cd, index) => {
              return (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/3 lg:basis-1/3"
                >
                  <CarouselCardComponent key={index} cardData={cd} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* Still Confused Section */}
      <div
        className={` w-[85%] mx-auto self-stretch flex flex-row items-start justify-start py-0 px-[70px] box-border max-w-full text-left text-13xl text-white`}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[147px] max-w-full mb-5">
          <div className="self-stretch shadow-[0px_0px_8px_1px_rgba(255,_255,_255,_0.45)] rounded-5xs [background:linear-gradient(257.43deg,_#030a21,_#021b6a_45.13%,_#022fc4)] overflow-hidden flex flex-row items-start justify-between py-12 pr-[58px] pl-[30px] gap-[20px] rounded-lg">
            <h1 className="font-medium text-3xl">Still Confused ?</h1>
            <div className="h-11 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <button className="cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0">
                <span className="text-white">Talk to our Consultant</span>
                <span className="ml-2 font-semibold text-white text-2xl ">
                  ›
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrashCourse;
