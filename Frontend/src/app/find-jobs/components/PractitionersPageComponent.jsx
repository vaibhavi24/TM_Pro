import PractitionersCardComponent from "./PractitionersCardComponent";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PractitionersPageComponent = ({ practitionersData }) => {
  if (!practitionersData) {
    return <p className="w-[80%] text-lg mx-auto">Loading...</p>;
  }
  let { Title, SubTitle, companyLogoImages, practioners } = practitionersData;
  let carouselItemData = [
    {
      profileImg: "rectangle-34666@2x.png",
      name: "Sai Jain",
      companyLogo: "/ellipse-657@2x.png",
      companyName: "Razorpay",
      post: "Mentor",
    },
    {
      profileImg: "/rectangle-34740@2x.png",
      name: "Saili Singh",
      companyLogo: "/ellipse-657@2x.png",
      companyName: "Amazon",
      post: "Co-founder",
    },
    {
      profileImg: "/rectangle-34741@2x.png",
      name: "Akhilesh Patil",
      companyLogo: "/ellipse-658@2x.png",
      companyName: "Meta",
      post: "Mentor",
    },
    {
      profileImg: "/rectangle-34742@2x.png",
      name: "Sanket Singh",
      companyLogo: "/ellipse-657-1@2x.png",
      companyName: "Apple",
      post: "Mentor",
    },
    {
      profileImg: "/rectangle-34743@2x.png",
      name: "Ajay Mishra",
      companyLogo: "/ellipse-657-2@2x.png",
      companyName: "PayPal",
      post: "Mentor",
    },
    {
      profileImg: "rectangle-34666@2x.png",
      name: "Sai Jain",
      companyLogo: "/ellipse-657@2x.png",
      companyName: "Razorpay",
      post: "Mentor",
    },
    {
      profileImg: "/rectangle-34740@2x.png",
      name: "Saili Singh",
      companyLogo: "/ellipse-657@2x.png",
      companyName: "Amazon",
      post: "Co-founder",
    },
    {
      profileImg: "/rectangle-34741@2x.png",
      name: "Akhilesh Patil",
      companyLogo: "/ellipse-658@2x.png",
      companyName: "Meta",
      post: "Mentor",
    },
    {
      profileImg: "/rectangle-34742@2x.png",
      name: "Sanket Singh",
      companyLogo: "/ellipse-657-1@2x.png",
      companyName: "Apple",
      post: "Mentor",
    },
    {
      profileImg: "/rectangle-34743@2x.png",
      name: "Ajay Mishra",
      companyLogo: "/ellipse-657-2@2x.png",
      companyName: "PayPal",
      post: "Mentor",
    },
  ];
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }
  return (
    <section
      className={`w-[100%] self-stretch bg-[#030A21] overflow-hidden flex flex-col items-start justify-start py-[79px] px-16 box-border gap-[60px] max-w-full text-left text-29xl text-cornflowerblue font-sub-heading `}
    >
      {/* Heading section */}
      <div className="w-[90%] mx-auto self-stretch flex flex-row items-start justify-start pt-0 pb-[35px] pr-0 pl-4 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full ">
          <div className="w-[50%] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[619px] max-w-full mq1275:min-w-full mq1625:flex-1">
            <div className="w-[100%] self-stretch flex flex-col items-start justify-start gap-[24.7px] max-w-full">
              <h1 className="text-[#78b6ff]  text-start font-semibold text-5xl tracking-wider">
                {Title}
              </h1>
              <p className="w-[50%] text-wrap self-stretch text-md text-white">
                {SubTitle}
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[544px] max-w-full ">
            <Image
              width={400}
              height={300}
              style={imgStyling}
              className="ml-[-3px] self-stretch h-[205px] relative max-w-full overflow-hidden shrink-0 "
              alt=""
              src="/frame-1000005918.svg"
            />
          </div>
        </div>
      </div>

      {/* Carousel section */}

      <div className="w-[90%] mx-auto box-border max-w-full text-xl text-gray-1900">
        <div className="w-[100%] p-2.5 box-border">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[100%] "
          >
            <CarouselContent>
              {practioners.map((pt, index) => {
                return (
                  <CarouselItem key={index} className=" basis-1/5 ">
                    <PractitionersCardComponent
                      practitionerData={pt}
                      isCompany={true}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="w-[1451px] h-[60px] flex flex-row items-start justify-center max-w-full rounded-lg">
        <button className="cursor-pointer p-8 bg-[transparent] h-[42px] rounded-xl box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0">
          <div className="relative flex justify-center items-center text-xl font-medium font-sub-heading text-white text-left  min-w-[93px] ">
            <span>See More</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start ">
              ›
            </span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default PractitionersPageComponent;
