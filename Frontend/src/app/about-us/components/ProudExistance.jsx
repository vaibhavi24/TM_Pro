import Image from "next/image";
import React from "react";

const ProudExistance = () => {
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  return (
    <div className="w-full my-8 p-3 ">
      <div className="w-[80%] flex flex-col mx-auto">
        <div>
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            5+ years of Proud Existence
          </h1>
          <p className="text-start my-5">
            TechMomentum is your gateway to professional growth and success in
            the digital age. Our comprehensive courses cover the latest trends
            in technology, digital marketing, and business innovation, providing
            you with the expertise to stay ahead of the curve. Join us and
            embark
          </p>
        </div>
        <div className="my-10">
          <Image
            width={500}
            height={400}
            style={imgStyling}
            src="/graph.png"
            alt="graph"
            sizes="(min-width: 375px) 100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ProudExistance;
