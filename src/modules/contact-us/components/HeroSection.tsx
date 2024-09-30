import { CONTACT_US_IMG_1 } from "../../../utils/mock";
import HeroCards from "./HeroCards";
import SearchBar from "./SearchBar";
import TopHeading from "./TopHeading";
import { useAnnimation } from "../../../hooks/useAnnimation";

// Hero Section for Contact Us Page
// Return the components with animation from useAnnimation hook
const HeroSection = () => {
  const annimation = useAnnimation(2, [100]);

  return (
    <>
      <div className="relative w-full min-h-[80vh] h-full">
        <img
          src={CONTACT_US_IMG_1}
          alt="contact-us-img"
          className="w-full h-full object-cover min-h-[60vh]"
        />
        <TopHeading />
        <div
          className={`absolute top-40 lg:top-72 left-1/2 transform -translate-x-1/2 text-center w-full transition-transform duration-700 ease-in-out ${
            annimation[1] ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <SearchBar />
        </div>
        <div
          className={`absolute -bottom-[9.5rem] lg:bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full lg:max-w-[40%] transition-transform duration-700 ease-in-out ${
            annimation[2] ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <HeroCards />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
