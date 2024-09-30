import { ContactUsFooterCompanyType } from "../../../types/type";
import {
  CONTACT_US_FOOTER_COMPANY,
  FOOTER_IMG_1,
  FOOTER_LINKS,
} from "../../../utils/mock";

// Footer for Contact Us Page
// Static data
const Footer: React.FC = () => {
  return (
    <section className="w-full lg:max-w-[75%] lg:mx-auto px-4 mt-10 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-[30%_64%] gap-20  w-full pb-5">
        <div className="col1 flex flex-col gap-3">
          <CompanyDetails data={CONTACT_US_FOOTER_COMPANY[0]} />
          <SignUp />
        </div>
        <div className="col2 grid grid-cols-1 lg:grid-cols-4 gap-3 w-full">
          {FOOTER_LINKS.map((ele, index) => (
            <div key={index} className="flex flex-col gap-3 items-left pl-2">
              <h2 className="text-lg text-black font-bold">{ele.title}</h2>
              {ele.links.map((link, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-600 cursor-pointer hover:text-red-500"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <BootomFooter img={FOOTER_IMG_1} />
    </section>
  );
};

export default Footer;

// Sign Up for Contact Us Page
// Static data
const SignUp: React.FC = () => {
  return (
    <div className="flex items-center justify-between border border-black p-1 flex-wrap">
      <div className="flex items-center gap-1 lg:gap-3 w-[70%] lg:w-auto mb-2 lg:mb-0 mt-1">
        <i className="bi bi-envelope ml-2"></i>
        <input
          type="text"
          name="signup"
          id="signup"
          className="outline-none border-none flex-grow mr-2"
          placeholder="Email address"
        />
      </div>
      <button className="text-white bg-black px-6 lg:px-6 py-2 lg:py-3 text-sm hover:bg-purple-200 hover:text-black transition-colors duration-500">
        Sign Up
      </button>
    </div>
  );
};

// Bootom Footer for Contact Us Page
// Takes image as props
const BootomFooter = ({ img }: { img: string }) => {
  return (
    <div className="lg:flex gap-2 items-center justify-between w-full border-t pt-2">
      <div>
        <p className="text-sm text-gray-600">
          © 2024 EComposer Store. All Rights Reserved.
        </p>
      </div>
      <div className="mt-3 lg:mt-0">
        <img
          src={img}
          alt="img"
          className="w-full h-auto lg:h-8 object-cover"
        />
      </div>
    </div>
  );
};

// Company Details for Contact Us Page
// Takes data as props
const CompanyDetails = ({ data }: { data: ContactUsFooterCompanyType }) => {
  return (
    <>
      <img
        src={data?.img}
        alt="img"
        className="w-32 lg:w-40 object-cover mb-3"
      />
      <p className="text-sm">Email: {data?.email}</p>
      <p className="text-sm">Phone: {data?.phone}</p>
      <p className="mt-3">{data?.desc}</p>
    </>
  );
};
