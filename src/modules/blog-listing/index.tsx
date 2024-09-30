import Fashion from "./components/Fashion";
import HeroSection from "./components/HeroSection";
import LifeStyle from "./components/LifeStyle";
import NewsLetter from "./components/NewsLetter";
import Spotlight from "./components/Spotlight";
import { ErrorBoundary } from "react-error-boundary";
import ErroFallbackUi from "../../components/ErroFallbackUi";

const BlogListing = () => {
  return (
    <ErrorBoundary fallback={<ErroFallbackUi />}>
      <HeroSection />
      <NewsLetter />
      <Fashion />
      <Spotlight />
      <LifeStyle />
    </ErrorBoundary>
  );
};

export default BlogListing;
