import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import Stats from "./components/Stats";
import CompanyHire from "./components/CompaniesHires";
import Testmonial from "@/app/_CommonComponents/StudentReviewComponent";
import Training from './components/TrainPage'

const HireFromUsPage = () => {
  let navItems = [
    { url: "#companies", title: "Companies" },
    { url: "#rightCandidates", title: "The Right Candidates" },
    { url: "#howItWorks", title: "How it Works?" },
    { url: "#whyChooseTm", title: "Why Choose TM?" },
    { url: "", title: "Our Past Hiring Process" },
  ];

  return (
    <>
      <HeroSection
        headerData={{
          title: <span className="text-[#78ECFC]">Companies Hire from Us</span>,
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/about-us.png",
        }}
        isFormOpen={true}
      />
      <Navigation
        navItemsData={navItems}
        isButton={true}
        buttonText={"Apply Now"}
      />
      <Stats />
      <CompanyHire />
      <Testmonial heading={"Testimonials"}/>
      <Training />
    </>
  );
};

export default HireFromUsPage;
