import { HELP_DESK, HelpDeskType } from "../../../utils/mock";

const HelpDesk: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-44 lg:mt-10 mb-20">
      <div className="flex items-center justify-center w-full mb-10">
        <h1 className="text-2xl lg:text-4xl text-black">
          Browse our help desk
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 w-full">
        {HELP_DESK.map((ele: HelpDeskType) => (
          <HelpDeskCard key={ele?.id} ele={ele} />
        ))}
      </div>
    </section>
  );
};

export default HelpDesk;

const HelpDeskCard = ({ ele }: { ele: HelpDeskType }) => {
  return (
    <div className="bg-[#f4f4ff] p-8 rounded-xl flex flex-col gap-3">
      <img
        src={ele?.img}
        alt="img"
        className="object-cover w-16 h-16 text-4xl text-red-500"
      />
      <h2 className="text-2xl text-black">{ele?.title}</h2>
      <p className="text-sm text-gray-500">{ele?.desc}</p>
      <button className="text-sm hover:text-red-500 text-left">
        View More
      </button>
    </div>
  );
};
