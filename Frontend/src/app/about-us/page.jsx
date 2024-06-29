import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import AboutusPage from "./components/AboutusPage";
import OurPeople from "./components/OurPeople";
import CoreValues from "./components/CoreValues";
import ProudExistance from "./components/ProudExistance";
import OurTeam from "./components/OurTeam";
import Partners from "../_CommonComponents/Partners";
import Gallery from "./components/Gallery";
import Program from "./components/ProvideProgram";
import StudentReview from "../_CommonComponents/StudentReviewComponent";
import Query from "../_CommonComponents/QueryComponent";

const page = () => {
  let navItems = [
    {
      title: "Overview",
      url: "#overview",
    },
    {
      title: "Our Core Values",
      url: "#ourCoreValues",
    },
    {
      title: "Our Journey",
      url: "#ourJourney",
    },
    {
      title: "Our Team",
      url: "#ourTeam",
    },
    {
      title: "Our Partner Ecosystem",
      url: "#ourPartnerEcosystem",
    },
    {
      title: "Gallery",
      url: "#gallery",
    },
  ];

  return (
    <>
      <HeroSection
        headerData={{
          title: <span className="text-[#78ECFC]">TECH MOMENTUM</span>,
          subTitle:
            "TechMomentum is your gateway to professional growth and success in the digital age. Our comprehensive courses cover the latest trends in technology, digital marketing, and business innovation, providing you with the expertise to stay ahead of the curve. Join us and embark on a journey of continuous learning and achievement.",
          headerImage: "/about-us.png",
        }}
      />
      <Navigation navItemsData={navItems} isButton={false} />
      <AboutusPage />
      <OurPeople />
      <CoreValues />
      <ProudExistance />
      <OurTeam />
      <Partners />
      <Gallery />
      <Program />
      <StudentReview heading={"Testimonials"} />
      <Query />
    </>
  );
};

export default page;
