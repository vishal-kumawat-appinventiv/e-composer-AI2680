import Fashion from "./components/Fashion";
import HeroSection from "./components/HeroSection";
import LifeStyle from "./components/LifeStyle";
import SpotlightCards from "./components/SpotlightCards";
import NewsLetter from "./components/NewsLetter";
import Spotlight from "./components/Spotlight";

const BlogListing = () => {
  return (
    <>
      <HeroSection />
      <NewsLetter />
      <Fashion />
      <Spotlight />
      <SpotlightCards />
      <LifeStyle />
    </>
  );
};

export default BlogListing;
