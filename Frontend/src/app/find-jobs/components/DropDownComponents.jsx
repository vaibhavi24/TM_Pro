"use client"
import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.js"
import { useState } from "react";

const DropDown = ({ questions, answer }) => {
  let [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={`w-full rounded-2xl overflow-hidden flex flex-col items-start justify-between py-[15px] pr-[31px] pl-0.5 box-border max-w-full gap-[20px] text-left text-xl text-gray-400`}
        id="options-menu"
        aria-expanded={isOpen}
        // aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <div className="flex justify-between w-[100%] relative shrink-0 max-w-full ">
          <div className="m-0 w-[70%] ">{questions}</div>
          <div className=" pt-3 px-0 pb-0">
            <Image width={20} height={20}
              className="w-[35px] h-[35px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-28.svg"
            />
          </div>
        </div>
      </button>
      <div className={`${isOpen ? "visible" : "hidden"} `}>{answer}</div>
      
    </>
  );
};


export default DropDown;
