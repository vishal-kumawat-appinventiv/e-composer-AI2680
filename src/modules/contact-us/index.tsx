import { ErrorBoundary } from "react-error-boundary";
import Footer from "./components/Footer";
import HelpDesk from "./components/HelpDesk";
import HeroSection from "./components/HeroSection";
import OtherQuestions from "./components/OtherQuestions";
import PopularQuestions from "./components/PopularQuestions";
import ErroFallbackUi from "../../components/ErroFallbackUi";

const ContactUs = () => {
  return (
    <ErrorBoundary fallback={<ErroFallbackUi />}>
      <HeroSection />
      <HelpDesk />
      <PopularQuestions />
      <OtherQuestions />
      <div className="border-t">
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default ContactUs;
