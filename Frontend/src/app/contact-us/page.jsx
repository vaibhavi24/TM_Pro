import HeroSection from "../_CommonComponents/HeroSection";
import Navigation from "../_CommonComponents/Navigation";
import HelpSection from "./components/HelpSection";
import SocialMedia from "./components/SocialMedia";
import Map from "./components/Map";

const contactpage = () => {
  let navItems = [
    {
      title: "Help you",
      url: "#helpYou",
    },
    {
      title: "Social Media",
      url: "#socialMedia",
    },
    {
      title: "Locate Us",
      url: "#locateUs",
    },
  ];
  return (
    <>
      <HeroSection
        headerData={{
          title: <span className="text-[#78ECFC]">Contact Us</span>,
          subTitle:
            "Ramp up with the best interview questions and answers and proven interview tips. With interviews getting harder.",
          headerImage: "/about-us.png",
        }}
      />
      <Navigation navItemsData={navItems} isButton={false} />
      <HelpSection />
      <SocialMedia />
      <Map />
    </>
  );
};

export default contactpage;
