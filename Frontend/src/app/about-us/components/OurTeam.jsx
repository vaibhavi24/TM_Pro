import OurTeamsCards from "../../find-jobs/components/PractitionersCardComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OurTeam = () => {
  let carouselItemData = [
    {
      profileImage: "/rectangle-34666@2x.png",
      name: "Sai Jain",
      companyLogo: "/ellipse-657@2x.png",
      company: "Razorpay",
      position: "Mentor",
    },
    {
      profileImage: "/rectangle-34740@2x.png",
      name: "Saili Singh",
      companyLogo: "/ellipse-657@2x.png",
      company: "Amazon",
      position: "Co-founder",
    },
    {
      profileImage: "/rectangle-34741@2x.png",
      name: "Akhilesh Patil",
      companyLogo: "/ellipse-658@2x.png",
      company: "Meta",
      position: "Mentor",
    },
    {
      profileImage: "/rectangle-34742@2x.png",
      name: "Sanket Singh",
      companyLogo: "/ellipse-657-1@2x.png",
      company: "Apple",
      position: "Mentor",
    },
    {
      profileImage: "/rectangle-34743@2x.png",
      name: "Ajay Mishra",
      companyLogo: "/ellipse-657-2@2x.png",
      company: "PayPal",
      position: "Mentor",
    },
    {
      profileImage: "/rectangle-34666@2x.png",
      name: "Sai Jain",
      companyLogo: "/ellipse-657@2x.png",
      company: "Razorpay",
      position: "Mentor",
    },
    {
      profileImage: "/rectangle-34740@2x.png",
      name: "Saili Singh",
      companyLogo: "/ellipse-657@2x.png",
      company: "Amazon",
      position: "Co-founder",
    },
    {
      profileImage: "/rectangle-34741@2x.png",
      name: "Akhilesh Patil",
      companyLogo: "/ellipse-658@2x.png",
      company: "Meta",
      position: "Mentor",
    },
    {
      profileImage: "/rectangle-34742@2x.png",
      name: "Sanket Singh",
      companyLogo: "/ellipse-657-1@2x.png",
      company: "Apple",
      position: "Mentor",
    },
    {
      profileImage: "/rectangle-34743@2x.png",
      name: "Ajay Mishra",
      companyLogo: "/ellipse-657-2@2x.png",
      company: "PayPal",
      position: "Mentor",
    },
  ];
  return (
    <div className="w-full my-8 py-6 bg-black text-white">
      <div className="w-[80%] mx-auto flex flex-col">
        {/* Heading section */}
        <div className="my-6">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            Our Team
          </h1>
          <p className="text-start my-5 text-slate-400">
            With expertise in Digital, Engineering and Cloud, we deliver
            solutions that fulfill the traditional, transformational and future
            needs of clients across the globe.
          </p>
        </div>

        {/* Carousel section */}
        <div className="my-6">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[100%]"
          >
            <CarouselContent>
              {carouselItemData.map((cd, index) => {
                return (
                  <CarouselItem key={index} className=" basis-1/5 h-[450px]">
                    <OurTeamsCards practitionerData={cd} isCompany={true}/>
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
  );
};

export default OurTeam;
