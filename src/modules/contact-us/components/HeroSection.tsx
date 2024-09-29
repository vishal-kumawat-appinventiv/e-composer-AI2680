import { CONTACT_US_IMG_1 } from "../../../utils/mock";
import HeroCards from "./HeroCards";
import SearchBar from "./SearchBar";
import TopHeading from "./TopHeading";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full min-h-[80vh] h-full">
        <img
          src={CONTACT_US_IMG_1}
          alt="contact-us-img"
          className="w-full h-full object-cover min-h-[60vh]"
        />
        <TopHeading />
        <div className="absolute top-40 lg:top-72 left-1/2 transform -translate-x-1/2 text-center w-full">
          <SearchBar />
        </div>
        <div className="absolute -bottom-[9.5rem] lg:bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full lg:max-w-[40%]">
          <HeroCards />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
