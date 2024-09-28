import Fashion from "./components/Fashion";
import HeroSection from "./components/HeroSection";
import LifeStyle from "./components/LifeStyle";
import MiddleCards from "./components/MiddleCards";
import NewsLetter from "./components/NewsLetter";
import Spotlight from "./components/Spotlight";

const BlogListing = () => {
  return (
    <>
      <HeroSection />
      <NewsLetter />
      <Fashion />
      <Spotlight />
      <MiddleCards />
      <LifeStyle />
    </>
  );
};

export default BlogListing;
