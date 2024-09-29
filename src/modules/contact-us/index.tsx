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
    </>
  );
};

export default ContactUs;
