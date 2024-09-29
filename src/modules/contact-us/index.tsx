import Footer from "./components/Footer";
import HelpDesk from "./components/HelpDesk";
import HeroSection from "./components/HeroSection";
import OtherQuestions from "./components/OtherQuestions";
import PopularQuestions from "./components/PopularQuestions";

const ContactUs = () => {
  return (
    <>
      <HeroSection />
      <HelpDesk />
      <PopularQuestions />
      <OtherQuestions />
      <div className="border-t">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
