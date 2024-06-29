import Image from "next/image";
import React from "react";

const CollegeCollaborations = () => {
  return (
    <div className="w-full my-8 py-6 bg-black text-white">
      <div className="w-[80%] mx-auto">
        {/* Heading section */}
        <div className="my-6">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            Collaborations with college
          </h1>
          <p className="text-start my-5 text-slate-400">
            Since our inception in 2004, ValueCoders has been delivering IT
            outsourcing services worldwide. We combine business domain
            knowledge, proven methodologies, and the technology expertise of
            450+ skilled software professionals to yield high-quality solutions
            that add value to businesses.
          </p>
        </div>

        {/* Image section */}
        <div className="flex flex-wrap my-10">
          {/* img 1 */}
          <div className="relative w-1/3 h-[300px]">
            <Image
              src={"/image-108@2x.png"}
              width={500}
              height={200}
              alt="Image 1"
              sizes="(max-width: 400px) 100vw, 100%"
            />
          </div>

          {/* img 2 */}
          <div className="relative w-1/3 h-[300px]">
            <Image
              src={"/image-109@2x.png"}
              width={500}
              height={200}
              alt="Image 2"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>

          {/* img 3 */}
          <div className="relative w-1/3 h-[300px]">
            <Image
              src={"/image111.png"}
              width={500}
              height={200}
              alt="Description of the image"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>

          {/* img 4 */}
          <div className="relative mt-2 w-1/2 h-[500px] ">
            <Image
              src={"/image-111@2x.png"}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              width={500}
              height={100}
              alt="Description of the image"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>

          {/* img 5 */}
          <div className="relative p-3 mt-2 w-1/2 h-[500px] ">
            <Image
              src={"/college-collaboration-img.png"}
              className=""
              style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "20px" }}
              width={500}
              height={100}
              alt="Description of the image"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// image-108@2x.png, image-109@2x.png, image111.png, image-111@2x.png, college-collaboration-img.png
export default CollegeCollaborations;
