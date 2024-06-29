import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const EarnCertificate = ({}) => {
  let achievementData = [
    {
      rank: "4",
      title: "Earn a PG Certificate in Cyber Security",
      verifiedBy: "Outlook India",
    },
    {
      rank: "9",
      title: "In One Year Programs",
      verifiedBy: "Business World",
    },
    {
      rank: "9",
      title: "Top B-Schools",
      verifiedBy: "Business World",
    },
  ];
  let imageData = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image1",
    "image2",
    "image3",
    "image4",
  ];
  return (
    <div className={"w-full mt-10 bg-black text-white p-3"}>
      {/* Heading section */}
      <div className="w-[80%] mx-auto my-10">
        <h1 className="text-[#78B6FF] uppercase py-4 text-start font-semibold text-3xl tracking-wider">
          Earn Certificate
        </h1>
        <p className="text-md ">
          Ranked among India&apos;s top 10 business schools, Great Lakes is highly
          regarded for its analytics programs. A certification from Great Lakes
          Executive Learning ensures industry credibility and acceptance,
          providing a robust foundation for your career advancement.
        </p>
      </div>

      {/* Certificate section */}
      <div className="w-[80%] mx-auto my-10 flex h-[500px] p-3">
        <div className="w-1/2 p-3  flex flex-col items-start h-full">
          <div className="border-r-2 border-slate-400 w-full h-full">
            <div className="bg-[#D1E6FF] p-3 w-[90%] h-full">
              <Image
                width={300}
                height={300}
                src="/certificate.png"
                alt="certificate"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="pt-2">
            *Image for illustration only Certificate subject to change.
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-3 mt-2">
          {achievementData.map((ac, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center bg-white text-black px-3 w-[90%] h-[110px] rounded-sm ms-8"
              >
                <div className="relative w-[30%]">
                  <Image
                    width={100}
                    height={100}
                    style={{ width: "100px", height: "100px" }}
                    src="/wheat_leafs.png"
                    alt="wheat_leafs"
                  />
                  <p className="text-[#03006D] absolute top-[33%] left-[28%] text-2xl font-semibold">
                    {ac.rank}{" "}
                    <sup className="absolute top-[-5px] left-[100%] text-sm font-normal mb-3">
                      th
                    </sup>
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-1 flex-wrap w-[70%]">
                  <p className="text-[#03006D] font-semibold text-2xl tracking-normal">
                    {ac.title}
                  </p>
                  <p className="text-sm text-slate-400 pt-4">
                    By {ac.verifiedBy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel section */}
      <div className="w-[80%] mx-auto my-10 p-3">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[93%]  mx-auto  bg-slate-600"
        >
          <CarouselContent className="w-full flex items-center justify-center">
            {imageData.map((image, index) => {
              return (
                <CarouselItem
                  className="basis-auto w-[250px] h-[200px] mx-2 flex items-center"
                  key={index}
                >
                  <Image width={200}
                    height={200}
                    style={{ width: "200px", height: "200px" }} src={`/${image}.png`} alt={image} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default EarnCertificate;
