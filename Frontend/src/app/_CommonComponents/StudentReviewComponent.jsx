import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const StudentReviews = ({ heading }) => {
  let reviewData = [
    {
      video: "rectangle-34980@2x",
      content:
        "Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies,  We combine business domain knowledge, proven methodologies.",
      tags: [
        "Quality",
        "Performance",
        "Performance",
        "Accountability",
        "Skilled",
        "Skilled",
      ],
      profile: "profile-picture@2x",
      name: "Riddhi Gaikwad",
      role: "Developer",
    },
  ];

  return (
    <div
      className={`w-full self-stretch flex flex-row items-start justify-center my-10 box-border max-w-full text-left text-base text-gray-1400 font-sub-heading p-3`}
    >
      <div className="w-[80%] mx-auto">
        <div className="w-[100%] mb-16">
          <h2 className="mb-3 uppercase text-3xl text-[#0466C1] font-bold ">
            {heading}
          </h2>
          <p className="mb-3">
            In this quiz, you will be tested on Core Java basics and OOPS
            concepts. There are some code snippets too to test your basic Java
            coding,
          </p>
        </div>

        {/* Carousel Section */}

        <div className="w-[100%] mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[93%] mx-auto"
          >
            <CarouselContent>
              {reviewData.map((rw, index) => {
                return (
                  <CarouselItem className="" key={index}>
                    <div className="w-full flex justify-between p-3 mb-4 bg-slate-300">
                      <div className=" w-1/2 p-3">
                        <video src={`/${rw.video}.png`}></video>
                      </div>
                      <div className=" w-1/2 flex flex-col gap-6 p-3">
                        {/* Content Div */}
                        <div className="flex items-start gap-2">
                          <Image
                            width={65}
                            height={65}
                            src="/highLightQuote.png"
                            alt="quotes"
                          />
                          <p className="text-md pt-1">{rw.content}</p>
                        </div>

                        {/* Tags Div */}
                        <div className="flex flex-wrap gap-4">
                          {rw.tags.map((tg, index) => {
                            return (
                              <div
                                key={index}
                                className="bg-[#5CB95A] text-white flex gap-3 p-2 rounded-lg"
                              >
                                <Image
                                  width={20}
                                  height={20}
                                  style={{ width: "20px", height: "20px" }}
                                  src="/check.png"
                                  alt="tickmark"
                                />
                                <p>{tg}</p>
                              </div>
                            );
                          })}
                        </div>

                        {/* Name Div */}
                        <div className="flex justify-end h-[45px]">
                          <div className="flex gap-3 h-full">
                            <Image
                              width={50}
                              height={50}
                              style={{width: "50px", height: "50px"}}
                              src={`/${rw.profile}.png`}
                              alt="profile"
                              className="rounded-full h-full "
                            />
                            <div className="flex flex-col">
                              <h6 className="text-semibold">{rw.name}</h6>
                              <p className="text-sm text-slate-500">
                                {rw.role}
                              </p>
                            </div>
                          </div>
                        </div>
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
        <div className="flex justify-center">
          <button className="text-black m-3  text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span className="w-full me-2">Explore More</span>
            <span className="ml-1 font-semibold text-2xl w-full">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;
