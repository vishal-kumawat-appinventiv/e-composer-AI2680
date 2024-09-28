import Fashion from "./components/Fashion";
import HeroSection from "./components/HeroSection";
import LifeStyle from "./components/LifeStyle";
import MiddleCards from "./components/MiddleCards";
import NewsLetter from "./components/NewsLetter";

const BlogListing = () => {
  return (
    <>
      <HeroSection />
      <NewsLetter />
      <Fashion />
      <MiddleCards />
      <LifeStyle />
    </>
  );
};

export default BlogListing;
