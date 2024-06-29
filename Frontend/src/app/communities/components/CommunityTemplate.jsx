import Image from "next/image";
import React from "react";

const LearnWithCommunity = ({ title, subTitle, image, isAlternate }) => {
  let headingData = [
    {
      title: "Heading 1",
      subTitle:
        "AlmaBetter believes in community led learning. Enrol for our courses and join a community of serious & passionate tech folks, students, mentors and coaches.",
    },
    {
      title: "Heading 1",
      subTitle:
        "AlmaBetter believes in community led learning. Enrol for our courses and join a community of serious & passionate tech folks, students, mentors and coaches.",
    },
    {
      title: "Heading 1",
      subTitle:
        "AlmaBetter believes in community led learning. Enrol for our courses and join a community of serious & passionate tech folks, students, mentors and coaches.",
    },
  ];
  let imgStyling = {
    objectFit: "cover",
    width: "80%",
    height: "100%",
  };
  return (
    <div className="w-full my-20 py-8">
      <div className="w-[80%] mx-auto flex flex-col justify-between gap-6">
        {/* Heading section */}
        <div>
          <h1 className="text-3xl font-semibold text-[#0466C1] mb-3">
            {title}
          </h1>
          <p className="text-sm mb-6">{subTitle}</p>
        </div>

        {/* content section */}
        <div className={`w-full flex ${isAlternate ? "flex-row-reverse gap-6" : ""}`}>
          <div className="w-[40%] flex justify-center items-center">
            <Image
              width={300}
              height={400}
              style={imgStyling}
              src={image}
              alt="LearnWithCommunityImg"
            />
          </div>
          <div className="w-[60%] flex flex-col justify-evenly items-start py-16">
            {headingData.map((hd, index) => {
              return (
                <div key={index}>
                  <h1 className="text-2xl text-[#1D6FAB] font-semibold tracking-wide mb-3 ">
                    {hd.title}
                  </h1>
                  <p>{hd.subTitle}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* button section */}
        <div className="flex justify-center items-center">
          <button className="bg-white max-h-10 p-6 gap-1 border-[1px] border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span>Join Community</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
              ›
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnWithCommunity;
