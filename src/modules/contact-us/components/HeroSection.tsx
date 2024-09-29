import { CONTACT_US_IMG_1 } from "../../../utils/mock";
import SearchBar from "./SearchBar";
import TopHeading from "./TopHeading";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={CONTACT_US_IMG_1}
          alt="contact-us-img"
          className="w-full h-full object-cover min-h-[60vh]"
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-md"></div>
        <TopHeading />
        <div className="absolute top-40 lg:top-72 left-1/2 transform -translate-x-1/2 text-center w-full">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
