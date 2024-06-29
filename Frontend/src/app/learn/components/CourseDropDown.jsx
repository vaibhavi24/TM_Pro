"use client";
import Image from "next/image";
import { useState } from "react";

const CourseDropDown = ({ courseName, contentData }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [topic, keyTakeaway] = contentData;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`w-full rounded-2xl overflow-hidden flex flex-col items-start justify-between py-[15px] pr-[31px] pl-0.5 box-border max-w-full gap-[20px] text-left text-xl text-gray-400 border-[1px] border-slate-300`}
        id="options-menu"
        aria-expanded={isOpen}
        // aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <div className="flex justify-between w-[100%] relative shrink-0 max-w-full ">
          <div className="m-0 w-[70%] font-medium text-black flex items-center gap-3 ps-4">
            <Image
              width={20}
              height={20}
              style={{ width: "20px", height: "20px" }}
              src="/blue-point.png"
              alt="blue-point"
              className="w-4 h-4 flex items-center justify-center"
            />
            <h2>{courseName}</h2>
          </div>
          <div className=" pt-3 px-0 pb-0">
            <Image
              width={20}
              height={20}
              style={{ width: "20px", height: "20px" }}
              className="w-[35px] h-[35px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-28.svg"
            />
          </div>
        </div>
      </button>
      <div
        className={`${
          isOpen ? "visible" : "hidden"
        } flex justify-between  ps-8`}
      >
        <div className="w1/2 text-left py-4 ps-10 text-md">
          <h6>Topic</h6>
          <ul>
            {topic.map((val, index) => {
              return (
                <li key={index} className="list-disc my-2">
                  {val}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/2 text-left py-4 text-md">
          <h6>KeyTakwaway</h6>
          <ul>
            {keyTakeaway.map((kt, index) => {
              return (
                <li key={index} className="list-disc my-2">
                  {kt}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseDropDown;
