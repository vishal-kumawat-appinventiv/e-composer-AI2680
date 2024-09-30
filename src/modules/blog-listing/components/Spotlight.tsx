import SpotlightBanner from "./SpotlightBanner";
import SpotlightCards from "./SpotlightCards";
import useFetchBlogData from "../../../hooks/useFetchBlogData";

// Spotlight Section for Blog Listing Page
// Fetch the data from useFetchBlogData hook and render the component
const Spotlight = () => {
  const { SpotlightBannerData, SpotlightBlogsData } = useFetchBlogData();

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 relative">
      <div className="relative bg-[#f4f4f4] w-[85%] mx-auto text-center py-24 rounded-r-full rounded-l-full">
        <h1 className="absolute top-7 left-1/2 -translate-x-1/2 text-2xl lg:text-5xl text-black">
          Spotlight
        </h1>
      </div>

      <SpotlightBanner data={SpotlightBannerData[0]} />
      <SpotlightCards data={SpotlightBlogsData} />
    </div>
  );
};

export default Spotlight;
