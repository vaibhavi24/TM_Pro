import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const SuccessStories = () => {
  let storyData = [
    {
      img: "rectangle-34782@2x",
      name: "Shree Dawande",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34783@2x",
      name: "Gautam Prajapati",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34980@2x",
      name: "Riya Pathak",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34782@2x",
      name: "Shree Dawande",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34783@2x",
      name: "Gautam Prajapati",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
    {
      img: "rectangle-34980@2x",
      name: "Riya Pathak",
      content:
        "ss professionally: Dress business casual to make a good impression. Consider the company's culture and strike a balance between professionalism and fitting in.",
      tags: [
        "Nice Environment",
        "Best in Value",
        "Affordable",
        "Concept Clarity",
        "Experienced Trainer",
      ],
    },
  ];
  return (
    <>
      <div className="w-full my-10">
        <div className="w-[90%] mx-auto flex flex-col ">
          <h1 className="mb-8 ms-20 uppercase text-3xl text-[#0466C1] font-bold">
            SUCESS STORY
          </h1>
          <div className="w-[100%] mx-auto">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[93%]  mx-auto"
            >
              <CarouselContent>
                {storyData.map((st, index) => {
                  return (
                    <CarouselItem className="basis-1/3" key={index}>
                      <div className="w-full h-[500px] border-t-4 border-white flex flex-col justify-between mb-4 overflow-hidden rounded-lg">
                        <div className="">
                          <Image
                            width={300}
                            height={100}
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                            }}
                            src={`/${st.img}.png`}
                            alt="img"
                            className="w-full bg-cover"
                          />
                        </div>
                        <div className=" w-full flex flex-col gap-6 p-3 pb-4">
                          {/* Content Div */}
                          <div className=" gap-2">
                            <h2 className="uppercase text-lg text-[#0466C1] font-bold">
                              {st.name}
                            </h2>
                            <p className="pt-1">{st.content}</p>
                          </div>

                          {/* Tags Div */}
                          <div className=" flex flex-wrap gap-2 mb-4">
                            {st.tags.map((tg, index) => {
                              return (
                                <div
                                  key={index}
                                  className="bg-[#5CB95A] text-white text-sm flex items-center gap-2 p-1 rounded-lg"
                                >
                                  <Image
                                    width={20}
                                    height={20}
                                    style={{ width: "15px", height: "15px" }}
                                    src="/check.png"
                                    alt="tickmark"
                                    className="w-4 h-4"
                                  />
                                  <p className="">{tg}</p>
                                </div>
                              );
                            })}
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
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
