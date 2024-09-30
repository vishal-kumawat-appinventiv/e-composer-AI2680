import Fashion from "./components/Fashion";
import HeroSection from "./components/HeroSection";
import LifeStyle from "./components/LifeStyle";
import NewsLetter from "./components/NewsLetter";
import Spotlight from "./components/Spotlight";
import { ErrorBoundary } from "react-error-boundary";
import ErroFallbackUi from "../../components/ErroFallbackUi";
import { BlogProvider } from "../../context/BlogContext";

const BlogListing = () => {
  return (
    // Catches errors in any component below and renders error fallback UI
    <ErrorBoundary fallback={<ErroFallbackUi />}>
      {/* Context Provider for Blog Context */}
      <BlogProvider>
        <HeroSection />
        <NewsLetter />
        <Fashion />
        <Spotlight />
        <LifeStyle />
      </BlogProvider>
    </ErrorBoundary>
  );
};

export default BlogListing;
