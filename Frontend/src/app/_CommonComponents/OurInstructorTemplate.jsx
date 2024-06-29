import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const InstructorComponent = ({ title, subTitle }) => {
  let cardData = [
    {
      img: "inst1",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst2",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst3",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst4",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst1",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst2",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst3",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
    {
      img: "inst4",
      name: "David Heartzen",
      role: "Big Data Anayticsa",
      company: "Ex Google",
    },
  ];
  return (
    <div className="w-full mx-auto my-10 ">
      <div className="w-[80%] flex flex-col gap-3 mx-auto">
        {/* Heading section */}
        <div className="w-full my-3">
          <div className="mx-auto my-10">
            <h1 className="text-[#0466C1] uppercase py-4 text-start font-bold text-3xl ">
              {title}
            </h1>
            <p>{subTitle}</p>
          </div>
        </div>

        {/* Carousel section */}
        <div>
          <div className="flex gap-6">
            <h2 className="capitalize text-[#0466C2] text-lg font-medium ">
              Course Creators
            </h2>
            <h2 className="capitalize text-[#0466C2] text-lg font-medium ">
              Instuctors
            </h2>
          </div>
          <div className="w-[100%] mx-auto my-10 ">
            <Carousel
              opts={{
                align: "start",
                slidesToShow: 4, // Show 4 items per frame
                slidesToScroll: 4
              }}
              className="w-full mx-auto"
            >
              <CarouselContent className="bg-white flex justify-between gap-[2px] h-[300px] w-full">
                {cardData.map((cd, index) => {
                  return (
                    <CarouselItem
                      key={index}
                      className="flex-shrink-0 basis-1/4 p-2"
                    >
                      <div className=" bg-[#FAFAFA] rounded-lg w-full h-full flex flex-col items-center justify-center">
                        <div className="w-full h-[60%]">
                          <Image 
                          width={250}
                          height={100}
                            src={`/${cd.img}.png`}
                            alt={cd}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full p-2">
                          <h2 className="text-lg text-[#03006D] font-semibold">
                            {cd.name}
                          </h2>
                          <p className="text-md ">{cd.role}</p>
                          <p className="text-md ">{cd.company}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorComponent;
