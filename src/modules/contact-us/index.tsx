import { CONTACT_US_IMG_1 } from "../../utils/mock";

const ContactUs = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={CONTACT_US_IMG_1}
        alt="contact-us-img"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-transparent bg-opacity-50 backdrop-blur-md"></div>
      <div className="absolute top-20 lg:top-36 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl lg:text-5xl text-white font-bold">
          HELP CENTER
        </h1>
        <p className="text-xl text-white mt-2">
          Let us know how we may help you?
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
