import {
  CONTACT_US_FOOTER_COMPANY,
  ContactUsFooterCompanyType,
  FOOTER_IMG_2,
  FOOTER_LINKS,
} from "../../../utils/mock";

const Footer: React.FC = () => {
  return (
    <section className="max-w-[75%] mx-auto px-4 mt-10 mb-5">
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
      <BootomFooter img={FOOTER_IMG_2} />
    </section>
  );
};

export default Footer;

const SignUp: React.FC = () => {
  return (
    <div className="flex items-center justify-between border border-black p-1">
      <div className="flex items-center gap-1 lg:gap-3 w-full lg:w-auto">
        <i className="bi bi-envelope ml-2"></i>
        <input
          type="text"
          name="signup"
          id="signup"
          className="outline-none border-none w-[60%] lg:w-auto"
          placeholder="Email address"
        />
      </div>
      <button className="text-white bg-black px-2 lg:px-8 py-1 lg:py-3 text-sm hover:bg-purple-200 hover:text-black transition-colors duration-500">
        Sign Up
      </button>
    </div>
  );
};

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

const CompanyDetails = ({ data }: { data: ContactUsFooterCompanyType }) => {
  return (
    <>
      <img
        src={data?.img}
        alt="img"
        className="w-20 lg:w-40 object-cover mb-3"
      />
      <p className="text-sm">Email: {data?.email}</p>
      <p className="text-sm">Phone: {data?.phone}</p>
      <p className="mt-3">{data?.desc}</p>
    </>
  );
};
