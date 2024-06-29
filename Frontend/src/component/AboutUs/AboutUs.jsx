import React from "react";
import Image from "next/image";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="w-[100%] h-auto pt-[40px] pb-[20px]">
      <div className="w-[85%] h-[70vh] mx-auto flex flex-wrap bg-white py-[30px]">
        <div className="w-[50%] box-border pr-[20px] flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[24px] text-[#0466C1] font-bold uppercase">
              About us
            </h2>
            <p className="text-[16px]">
              TechMomentum is your gateway to professional growth and success in
              the digital age. Our comprehensive courses cover the latest trends
              in technology, digital marketing, and business innovation,
              providing you with the expertise to stay ahead of the curve. Join
              us and embark on a journey of continuous learning and achievement.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] mt-6">
            <h2 className="text-[24px] text-[#0466C1] font-bold uppercase">
              Our mission
            </h2>
            <p className="text-[16px]">
              Domain knowledge, proven methodologies, and the technology
              expertise of 450+ skilled professionals.
            </p>
          </div>
        </div>
        <div className="w-[50%] flex justify-end items-center">
          <Image
            src="/aboutUsImg.png"
            alt="About us"
            width={500} // Specify the width of the image
            height={500} // Specify the height of the image
            className="w-[80%] h-[80%] "
          />
        </div>
      </div>
      <div className="relative w-[100%] h-[30vh] flex flex-wrap justify-center gap-[40px] items-center half-bg">
        <div className="w-[15%] h-[75%] bg-white box-border p-[10px] flex flex-col gap-[5px] rounded-t-md">
          <h2 className="font-bold text-[#0466C1] text-[20px]">601K+</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            OUR EMPLOYEES
          </h4>
          <p className="font-normal text-[#000000] text-[12px]">
            Workforce globally distributed highly localized
          </p>
        </div>
        <div className="w-[15%] h-[75%] bg-white box-border p-[10px] flex flex-col gap-[5px] rounded-t-md">
          <h2 className="font-bold text-[#0466C1] text-[20px]">152</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            NATIONALITIES
          </h4>
          <p className="font-normal text-[#000000] text-[12px]">
            Nationalities represented from across the globe
          </p>
        </div>
        <div className="w-[15%] h-[75%] bg-white box-border p-[10px] flex flex-col gap-[5px] rounded-t-md">
          <h2 className="font-bold text-[#0466C1] text-[20px]">35.6%</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            DIVERSITY
          </h4>
          <p className="font-normal text-[#000000] text-[12px]">
            High demand competencies acquired. 51M hrs of learning hours in FY24
          </p>
        </div>
        <div className="w-[15%] h-[75%] bg-white box-border p-[10px] flex flex-col gap-[5px] rounded-t-md">
          <h2 className="font-bold text-[#0466C1] text-[20px]">296K</h2>
          <h4 className="font-semibold text-[#4E84C4] text-[14px]">
            DEVELOPMENT
          </h4>
          <p className="font-normal text-[#000000] text-[12px]">
            Workforce globally distributed highly localized
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
