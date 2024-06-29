import HeroSection from "@/component/HeroSection/HeroSection";
import AboutUs from "@/component/AboutUs/AboutUs";
import ExploreMore from "@/component/exploreMore/ExploreMore";
import Courses from "@/component/Courses/header-section";
import TMAdvantage from "@/app/find-jobs/components/TechmomentumAdvantageComponent";
import LearnerBenefit from "@/component/LearnerBenefit/LearnerBenefitComponent";
import StudentsReveiw from "@/app/_CommonComponents/StudentReviewComponent";
import SuccessStories from "@/component/SuccessStories/SuccessStories";
import Collaborations from "@/component/Collaborations/Collaborations";
import Partners from "@/app/_CommonComponents/Partners";
import Potential from "@/component/Potential/PotentialComponent";
import Community from "@/component/Community/Community";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <ExploreMore />
      <Courses tagline={undefined} />
      <LearnerBenefit />
      <TMAdvantage />
      <StudentsReveiw heading={"What students are saying about us"} />
      <SuccessStories />
      <Collaborations />
      <Partners />
      <Potential />
      <Community />
    </main>
  );
}
